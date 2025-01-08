import { Header } from "../home/header";
import { ContactInfoSection } from "./contact-info-section";
import { ContactFormSection } from "./contact-form-section";
import { Footer } from "./footer";
import { HeroSection } from "./hero-section";
import { api } from "../../lib/axios";
import { FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";

export function ContatoPage() {
  async function createFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = data.get('user_name')?.toString();
    const email = data.get('user_email')?.toString();
    const message = data.get('message')?.toString();

    try {
      const response = await api.post('/feedback', {
        user_name: name,
        user_email: email,
        message: message
      });

      if (response.status === 200) {
        toast.success("Feedback enviado com sucesso!");
        event.currentTarget.reset();
      } else {
        toast.error("Erro ao enviar o feedback.");
      }
    } catch (error: any) {
      const errors = error.response?.data?.errors;
      if (errors && errors.message) {
        // Exibe cada erro retornado no array de mensagens
        errors.message.forEach((msg: string) => {
          toast.error(msg);
        });
      } else {
        const errorMessage = error.response?.data?.message || "Erro ao enviar o feedback. Tente novamente.";
        toast.error(errorMessage);
      }
    }
  }

  return (
    <>

      <ToastContainer />

      <Header />

      <HeroSection />

      <ContactFormSection createFeedback={createFeedback} />

      <ContactInfoSection />

      <Footer />
    </>
  );
}
