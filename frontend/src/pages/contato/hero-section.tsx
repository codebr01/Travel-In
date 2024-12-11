import HeroImage from '../../assets/full-shot-woman-taking-photos.jpg'

export function HeroSection() {
  return (
    < section className = "relative flex items-center justify-center text-center text-white h-screen bg-cover bg-right"
              style = {{ backgroundImage: `url(${HeroImage})` }}>
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-black/70 to-black/50 z-0"></div>
      <div className="relative z-10 max-w-4xl px-5">
        <h1 className="text-4xl font-bold mb-4">Fale Conosco</h1>
        <p className="text-lg leading-relaxed mb-6">
          Dúvidas, sugestões ou feedback? Estamos aqui para ouvir você. 
          Entre em contato e vamos planejar juntos a sua próxima viagem inesquecível!
        </p>
        <a href="#contact-form" className="inline-block px-6 py-3 text-lg bg-green-900 text-white rounded hover:bg-green-700 transition">
          Enviar Mensagem
        </a>
      </div>
    </section >
  )
}