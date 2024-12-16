import fastify from "fastify"
import { createTrip } from "./routes/create-trip"
import cors from "@fastify/cors"
import { validatorCompiler } from "fastify-type-provider-zod"
import { serializerCompiler } from "fastify-type-provider-zod"
import { confirmTrip } from "./routes/confirm-trip"
import { confirmParticipants } from "./routes/confirm-participant"
import { createActivity } from "./routes/create-activity"
import { getActivities } from "./routes/get-activities"
import { createLink } from "./routes/create-link"
import { getLinks } from "./routes/get-links"
import { getParticipants } from "./routes/get-participants"
import { createInvite } from "./routes/create-invite"
import { updateTrip } from "./routes/update-trip"
import { getTripDetails } from "./routes/get-trip-details"
import { getParticipant } from "./routes/get-participant"
import { registerUser } from "./routes/register-user"
import { loginUser } from "./routes/login-user"
import { errorHandler } from "./error-handler"
import { validateToken } from "./routes/validade-token"
import { env } from "./env"
import { getTrips } from "./routes/get-trips"
import { getUser } from "./routes/get-user"
// import { changeGuests } from "./routes/change-guests"


const app = fastify();

app.register(cors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler);

app.register(registerUser);
app.register(loginUser);
app.register(createTrip);
app.register(confirmTrip);
app.register(confirmParticipants);
app.register(createActivity);
app.register(getActivities);
app.register(createLink);
app.register(getLinks);
app.register(getParticipants);
app.register(createInvite);
app.register(updateTrip);
app.register(getTripDetails);
app.register(getParticipant);
app.register(validateToken);
app.register(getTrips);
app.register(getUser);

app.listen({ port: env.PORT }).then(() => {
  console.log('Server running -> http://localhost:3333');
});
