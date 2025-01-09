import * as dotenv from 'dotenv';
dotenv.config();  // Ajuste o caminho para o arquivo .env

import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_BASE_URL: z.string().url(),
  WEB_BASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3333),
  TOKEN_SECRET: z.string(),
  TOKEN_API_SEND_GRID: z.string(),
  HOST_SMTP: z.string(),
  PORT_SMTP: z.coerce.number(),
  USER_SMTP: z.string(),
  PASS_SMTP: z.string()
});

export const env = envSchema.parse(process.env);  // Valida as variáveis carregadas
