import type { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { dayjs } from "../lib/dayjs";
import { getMailClient } from "../lib/mail";
import { prisma } from "../lib/prisma";
import { ClientError } from "../errors/client-error";
import { env } from "../env";

export async function confirmTrip(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/trips/:tripId/confirm', {
    schema: {
      params: z.object({
        tripId: z.string().uuid()
      })
    },
  }, async (request, reply) => {

    const { tripId } = request.params

    const trip = await prisma.trip.findUnique({
      where: {
        id: tripId
      },
      include: {
        participants: {
          where: { is_owner: false }
        }
      }
    })

    if (!trip) {
      throw new ClientError('Trip not found.')
    }

    if (trip.is_confirmed) {
      return reply.redirect(`${env.WEB_BASE_URL}/trips/${tripId}`)
    }

    await prisma.trip.update({
      where: { id: tripId },
      data: { is_confirmed: true }
    })

    const formattedStartDate = dayjs(trip.starts_at).format('LL')
    const formattedEndDate = dayjs(trip.ends_at).format('LL')

    const mail = await getMailClient()

    await Promise.all(
      trip.participants.map(async (participant) => {

        const confirmationLink = `${env.API_BASE_URL}/participants/${participant.id}/confirm`

        const message = await mail.sendMail({
          from: {
            name: 'Equipe Trip Planner',
            address: 'plannert45@gmail.com'
          },
          to: participant.email,
          subject: `Confirme sua presença na para ${trip.destination} em ${formattedStartDate}`,
          html: `
            <div style="font-family: sans-serif; font-size: 16px; line-height: 1.6;">
              <p>Você foi convidado para uma viagem de <strong>${trip.destination}</strong>, nas dastas <strong> ${formattedStartDate} até ${formattedEndDate}</strong>.</p>
              <p></p>
              <p>Para confirmar sua presença na viagem, clique no link abaixo:</p>
              <p></p>
              <p>
                <a href="${confirmationLink}" target="_blank">Confirmar viagem</a>
              </p>
              <p></p>
              <p>Caso esteja usando dispositivo móvel, você também pode confirmar a viagem pelos aplicativos:</p>
              <p>Caso você não saiba do que se trata esse email, apenas ignore.</p>
            </div>
          `.trim()
        })
      })
    )

    // return reply.redirect(`${env.WEB_BASE_URL}/trips/${tripId}`)
    
    return reply.type('text/html').send(`
      <html>
        <head>
          <title>Confirmação</title>
        </head>
        <body>
          <h1>Confirmação</h1>
          <p>Você confirmou a viagem!</p>
        </body>
      </html>
    `.trim());

  })
}