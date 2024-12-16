import type { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc";
import { ClientError } from "../errors/client-error"

dayjs.extend(utc);

export async function createActivity(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/trips/:tripId/activities',
    {
      schema: {
        params: z.object({
          tripId: z.string().uuid(),
        }),
        body: z.object({
          title: z.string().min(4),
          occurs_at: z.coerce.date(),
        })
      },
    },
    async (request) => {

      const { tripId } = request.params
      const { title, occurs_at } = request.body

      const trip = await prisma.trip.findUnique({
        where: { id: tripId }
      })

      if (!trip) {
        throw new ClientError('Trip not found.')
      }
  
      const occursAtUTC = dayjs(occurs_at).utc();
      const tripEndsAtUTC = dayjs(trip.ends_at).utc();
      const tripStartsAtUTC = dayjs(trip.starts_at).utc();
      
      if (occursAtUTC.isBefore(tripStartsAtUTC)) {
        throw new ClientError(`Invalid activity date: occurs_at(${occursAtUTC.format("YYYY-MM-DD HH:mm:ss")}) is before trip starts(${tripStartsAtUTC.format("YYYY-MM-DD HH:mm:ss")}).`)
      }
      
      if (occursAtUTC.isAfter(tripEndsAtUTC)) {
        throw new ClientError(`Invalid activity date: occurs_at(${occursAtUTC.format("YYYY-MM-DD HH:mm:ss")}) is after trip ends(${tripEndsAtUTC.format("YYYY-MM-DD HH:mm:ss")}).`)
      }

      const activity = await prisma.activity.create({
        data: {
          title,
          occurs_at,
          trip_id: tripId
        }
      })

      return { activityId: activity.id }
    }
  )
}