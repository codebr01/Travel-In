import type { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import bcrypt from 'bcrypt'
import { ClientError } from "../errors/client-error"
import jwt from "jsonwebtoken"
import { env } from "../env"

const JWT_SECRET = env.TOKEN_SECRET

export async function loginUser(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post('/login', {
    schema: {
      body: z.object({
        user_email: z.string().email(),
        user_password: z.string(),
      })
    },
  }, async (request) => {

    const { user_email, user_password } = request.body

    const user = await prisma.user.findUnique({
      where: { user_email: user_email }
    })

    if(!user) {
      throw new ClientError('User with this email not found.')
    }

    const isMatch = await bcrypt.compare(user_password, user.user_password)

    if(!isMatch) {
      throw new ClientError('Incorrect password.')
    }

    const token = jwt.sign(
      { userId: user.user_id },
      JWT_SECRET,
      { expiresIn: '1m' }
    );

    return { userId: user.user_id, token: token }
  })
}