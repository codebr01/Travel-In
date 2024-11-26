import type { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import bcrypt from 'bcrypt'
import { ClientError } from "../errors/client-error"


export async function registerUser(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post('/register', {
    schema: {
      body: z.object({
        user_name: z.string(),
        user_email: z.string().email(),
        user_password: z.string(),
      })
    },
  }, async (request) => {

    const { user_name, user_email, user_password } = request.body

    const verifyExistsUserEmail = await prisma.user.findUnique({
      where: { user_email: user_email }
    })

    if(verifyExistsUserEmail) {
      throw new ClientError('Email already exists')
    }

    const user_password_hash = await bcrypt.hash(user_password, 8)

    const user = await prisma.user.create({
      data: {
        user_name,
        user_email,
        user_password: user_password_hash
      }
    })

    return { userId: user.user_id }
  })
}