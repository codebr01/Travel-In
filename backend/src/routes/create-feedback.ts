import type { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { ClientError } from "../errors/client-error"


export async function createFeedback(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post('/feedback', {
    schema: {
      body: z.object({
        user_name: z.string(),
        user_email: z.string().email(),
        message: z.string().max(100)
      })
    },
  }, async (request) => {

    const { message, user_email, user_name } = request.body

    if (!user_email) {
      throw new ClientError('Email not provided.')
    }

    if (!user_name) {
      throw new ClientError('User name not provided.')
    }

    const feedback = await prisma.feedback.create({
      data: {
        message: message,
        user_email: user_email,
        user_name: user_name,
      }
    })

    return { feedback }
  })
}