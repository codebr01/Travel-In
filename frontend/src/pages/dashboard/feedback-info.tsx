import { Send } from "lucide-react";
import { useState } from "react";
import { SendFeedbackModal } from "./feedback-modal";
import { api } from "../../lib/axios";
import { toast, ToastContainer } from "react-toastify";

export function FeedbackInfo() {
  const [isFormFeedbackOpen, setFormFeedback] = useState(false);

  function openFeedbackModal() {
    setFormFeedback(true);
  }

  function closeFeedbackModal() {
    setFormFeedback(false);
  }

  async function sendFeedback(name: string, email: string, message: string) {

    try {
      const response = await api.post('/feedback', {
        user_name: name,
        user_email: email,
        message: message
      });

      if (response.status === 200) {
        toast.success("Feedback enviado com sucesso!");
      } else {
        toast.error("Erro ao enviar o feedback.");
      }
    } catch (error: any) {
      const errors = error.response?.data?.errors;
      if (errors && errors.message) {
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
      <ToastContainer/> 
      <h2 className="text-3xl font-semibold text-white">Envie seu feedback</h2>
      <div className="flex items-center gap-3">
        <p className="">Deixe sua opinião ou sugestão para melhorias da plataforma!</p>
        <div className="flex items-center">
          <button
            className="flex items-center bg-lime-300 text-lime-950 hover:bg-lime-400 py-2 px-2 mb-3 mt-3 rounded-md text-sm transition duration-300"
            id="add-trip-btn"
            onClick={openFeedbackModal} // Movido para o botão
          >
            <Send className="mr-2 size-5" />
            Enviar
          </button>
        </div>
      </div>

      {isFormFeedbackOpen && (
        <SendFeedbackModal
          closeModal={closeFeedbackModal}
          sendFeedback={sendFeedback}
        />
      )}
    </>
  );
}
