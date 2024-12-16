import type { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { ClientError } from "../errors/client-error";
import { env } from "../env";

export async function confirmParticipants(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/participants/:participantId/confirm', {
    schema: {
      params: z.object({
        participantId: z.string().uuid(),
      })
    },
  }, async (request, reply) => {

    const { participantId } = request.params

    const participant = await prisma.participant.findUnique({
      where: { id: participantId }
    })

    if (!participant) {
      throw new ClientError('Participant not found.')
    }

    if (participant.is_confirmed) {
      return reply.redirect(`${env.WEB_BASE_URL}/trips/${participant.trip_id}`)
    }

    await prisma.participant.update({
      where: { id: participantId },
      data: { is_confirmed: true }
    })

    // return reply.redirect(`${env.WEB_BASE_URL}/trips/${participant.trip_id}`)
    return reply.type('text/html').send(`
      <html>
        <head>
          <title>Confirmação</title>
        </head>
        <body>
          <h1>Confirmação</h1>
          <p>Você confirmou sua presença!</p>
        </body>
      </html>
    `.trim());
  })
}