import type { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { ClientError } from "../errors/client-error"

export async function getParticipants(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/trips/:tripId/participants',
    {
      schema: {
        params: z.object({
          tripId: z.string().uuid(),
        }),
      },
    }, 
    async (request) => {

      const { tripId } = request.params

      const trip = await prisma.trip.findUnique({
        where: { id: tripId },
        include: { 
          participants: {
            select: {
              id: true,
              email: true,
              name: true,
              is_confirmed: true
            }
          }
        }
      })

      if (!trip) {
        throw new ClientError('Trip not found.')
      }

      return { participants: trip.participants }
    }
  )
}