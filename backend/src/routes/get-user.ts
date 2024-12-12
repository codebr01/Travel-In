import type { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { ClientError } from "../errors/client-error"

export async function getUser(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/users/:userId',
    {
      schema: {
        params: z.object({
          userId: z.string().uuid(),
        }),
      },
    }, 
    async (request) => {

      const { userId } = request.params

      const user = await prisma.user.findFirst({
        select: {
          user_id: true,
          user_email: true,
          user_name: true,
        },
        where: { user_id: userId }
      })

      if (!user) {
        throw new ClientError('User not found.')
      }

      return { user }
    }
  )
}