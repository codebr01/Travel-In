import { AtSign, Mail, User, X } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface SendFeedbackModalProps {
  closeModal: () => void;
  sendFeedback: (name: string, email: string, message: string) => Promise<void>;
}

export function SendFeedbackModal({
  closeModal,
  sendFeedback,
}: SendFeedbackModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name === "" || email === "" || message === "") {
      toast.error("Preencha os campos corretamente!")
      return
    }

    if (message.length < 15) {
      alert("A mensagem deve conter pelo menos 15 caracteres.");
      return;
    }

    try {
      await sendFeedback(name, email, message);
      closeModal();
    } catch (error) {
      alert("Ocorreu um erro ao enviar o feedback. Tente novamente.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <ToastContainer/>
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Envie seu feedback</h2>
            <button type="button" onClick={closeModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="h-14 px-4 border border-zinc-800 bg-zinc-950 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              maxLength={20}
              required
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className=" h-14 px-4 border border-zinc-800 bg-zinc-950 rounded-lg flex items-center gap-2">
            <AtSign className="text-zinc-400 size-5" />
            <input
              type="email"
              name="owner_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail pessoal"
              maxLength={20}
              required
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="h-32 px-4 border border-zinc-800 bg-zinc-950 rounded-lg flex items-start gap-2">
            <Mail className="text-zinc-400 size-5 mt-3" />
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escreva sua mensagem"
              rows={4}
              maxLength={100}
              required
              className="mt-2 w-full bg-transparent text-lg placeholder-zinc-400 outline-none resize-none h-full"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="full"
            disabled={message.length < 15}
          >
            Enviar Feedback
          </Button>
        </form>
      </div>
    </div>
  );
}
