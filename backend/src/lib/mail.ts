import nodemailer from "nodemailer";
import { env } from "../env";

export async function getMailClient() {
  // const account = await nodemailer.createTestAccount()

  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.ethereal.email',
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: account.user,
  //     pass: account.pass
  //   }
  // })

  const transporter = nodemailer.createTransport({
    host: env.HOST_SMTP,
    port: env.PORT_SMTP,
    secure: true,
    auth: {
      user: env.USER_SMTP,
      pass: env.PASS_SMTP
    }
  })

  return transporter
}