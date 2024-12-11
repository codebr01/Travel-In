export function ContactFormSection() {
  return (
    <section id="contact-form" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-gray-700 text-3xl font-semibold mb-6">Envie uma mensagem</h2>
          <form action="#" method="POST" className="space-y-6">
            <div className="text-left">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Seu Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                required
                className="w-full px-4 py-2 border rounded outline-none focus:border-green-500"
              />
            </div>
            <div className="text-left">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Seu E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
                className="w-full px-4 py-2 border rounded outline-none focus:border-green-500"
              />
            </div>
            <div className="text-left">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Mensagem</label>
              <textarea
                id="message"
                name="message"
                placeholder="Escreva sua mensagem"
                rows={5}
                required
                className="w-full px-4 py-2 border rounded outline-none focus:border-green-500"
              ></textarea>
            </div>
            <button type="submit" className="px-6 py-3 text-lg text-white bg-green-600 rounded hover:bg-green-700 transition">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}