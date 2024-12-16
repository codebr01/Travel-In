import type { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { getMailClient } from "../lib/mail"
import { dayjs } from "../lib/dayjs"
import { ClientError } from "../errors/client-error"
import { env } from "../env"


export async function createTrip(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post('/trips', {
    schema: {
      body: z.object({
        destination: z.string().min(4),
        starts_at: z.coerce.date(),
        ends_at: z.coerce.date(),
        owner: z.string().uuid(),
        owner_name: z.string(),
        owner_email: z.string().email(),
        emails_to_invite: z.array(z.string().email())
      })
    },
  }, async (request) => {

    const { destination, starts_at, ends_at, owner, owner_name, owner_email, emails_to_invite } = request.body

    if (dayjs(starts_at).isBefore(new Date())) {
      throw new ClientError('Invalid trip start date.')
    }

    if (dayjs(ends_at).isBefore(starts_at)) {
      throw new ClientError('Invalid trip end date.')
    }

    const conflictingTrips = await prisma.trip.findMany({
      where: {
        OR: [
          { owner }, // O usuário é o proprietário
          {
            participants: {
              some: {
                email: owner_email // O usuário é participante
              }
            }
          }
        ],
        AND: [
          {
            OR: [
              {
                starts_at: {
                  lte: ends_at, // Início da viagem no banco é antes ou durante o término da nova viagem
                },
                ends_at: {
                  gte: starts_at, // Término da viagem no banco é depois ou durante o início da nova viagem
                }
              }
            ]
          }
        ]
      }
    });

    if (conflictingTrips.length > 0) {
      throw new ClientError('You already have a trip during the selected dates.');
    }

    const trip = await prisma.trip.create({
      data: {
        owner,
        owner_email: owner_email,
        destination,
        starts_at,
        ends_at,
        participants: {
          createMany: {
            data: [
              {
                name: owner_name,
                email: owner_email,
                is_owner: true,
                is_confirmed: true
              },
              ...emails_to_invite.map(email => {
                return { email }
              })
            ],
          }
        }
      }
    })

    const formattedStartDate = dayjs(starts_at).format('LL')
    const formattedEndDate = dayjs(ends_at).format('LL')

    const confirmationLink = `${env.API_BASE_URL}/trips/${trip.id}/confirm`

    const mail = await getMailClient()

    try {
      const message = await mail.sendMail({
        from: {
          name: 'Trip Planner',
          address: 'plannert45@gmail.com'
        },
        to: {
          name: owner_name,
          address: owner_email
        },
        subject: `Confirme sua viagem para ${destination} em ${formattedStartDate}`,
        html: `
          <div style="font-family: sans-serif; font-size: 16px; line-height: 1.6;">
            <p>Você solicitou a criação de uma viagem de <strong>${destination}</strong>, Brasil nas datas <strong> ${formattedStartDate} até ${formattedEndDate}</strong>.</p>
            <p></p>
            <p>Para confirmar sua viagem, clique no link abaixo:</p>
            <p></p>
            <p>
              <a href="${confirmationLink}" target="_blank">Confirmar viagem</a>
            </p>
            <p></p>
            <p>Caso esteja usando dispositivo móvel, você também pode confirmar a viagem pelos aplicativos:</p>
            <p>Caso você não saiba do que se trata esse email, apenas ignore.</p>
          </div>
        `.trim()
      });
    } catch (error) {
      console.error('Error sending email:', error);
      throw new ClientError('Failed to send invitation email');
    }

    return { tripId: trip.id }
  })
}