import type { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { ClientError } from "../errors/client-error"

export async function getTrips(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/dashboard/:userId',
    {
      schema: {
        params: z.object({
          userId: z.string().uuid(),
        }),
      },
    }, 
    async (request) => {

      const { userId } = request.params

      const trips = await prisma.trip.findMany({
        select: {
          id: true,
          destination: true,
          starts_at: true,
          ends_at: true
        },
        where: { owner: userId }
      })

      if (!trips) {
        throw new ClientError('User does not have trips.')
      }

      return { trips }
    }
  )
}