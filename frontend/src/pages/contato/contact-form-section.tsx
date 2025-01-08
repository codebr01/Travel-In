import { FormEvent, useState } from "react";

interface ContactFormSectionProps {
  createFeedback: (event: FormEvent<HTMLFormElement>) => void;
}

export function ContactFormSection({ createFeedback }: ContactFormSectionProps) {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.slice(0, 50);
    setName(value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.slice(0, 50);
    setEmail(value);
  };

  return (
    <section id="contact-form" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-gray-700 text-3xl font-semibold mb-6">Envie uma mensagem</h2>
          <form onSubmit={createFeedback} className="space-y-6">
            <div className="text-left text-zinc-700">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Seu Nome
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Digite seu nome"
                required
                maxLength={50}
                value={name}
                onChange={handleNameChange}
                className="w-full px-4 py-2 border rounded outline-none focus:border-green-500"
              />
              <p className="text-sm text-gray-600 mt-1">
                {name.length}/50 caracteres
              </p>
            </div>
            <div className="text-left text-zinc-700">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Seu E-mail
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Digite seu e-mail"
                required
                maxLength={50}
                value={email}
                onChange={handleEmailChange} 
                className="w-full px-4 py-2 border rounded outline-none focus:border-green-500"
              />
              <p className="text-sm text-gray-600 mt-1">
                {email.length}/50 caracteres
              </p>
            </div>
            <div className="text-left text-zinc-700">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Ex: Adicionar localização em tempo real"
                rows={5}
                required
                minLength={15}
                maxLength={100}
                value={message}
                onChange={handleMessageChange}
                className="w-full px-4 py-2 border rounded outline-none focus:border-green-500"
              ></textarea>
              <p className="text-sm text-gray-600 mt-1">
                {message.length}/100 caracteres
              </p>
            </div>
            <button
              type="submit"
              disabled={message.length < 15}
              className={`px-6 py-3 text-lg text-white rounded transition ${
                message.length < 15
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
