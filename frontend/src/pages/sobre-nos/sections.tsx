import './styles.css'

export function Section() {
  return (
    <>
      <section id="hero-about" className="relative bg-cover bg-center h-screen flex items-center justify-center text-white">
        <div className="bg-black bg-opacity-50 p-8 text-center rounded-lg">
          <h1 className="text-4xl font-bold mb-2">Sobre nós</h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            No Trip Planner, acreditamos que cada viagem começa com um sonho. Estamos aqui para transformar suas ideias em experiências incríveis, ajudando você a planejar tudo com facilidade.
          </p>
        </div>
      </section>

      <section className="py-16 h-[400px] bg-white" >
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex gap-5 flex-wrap">
            <div className="flex-1">
              <h2 className="flex-1 text-2xl font-bold mb-4 text-black">Quem Somos?</h2>
              <p className="mb-4 text-black">
                Somos apaixonados por explorar o mundo e por conectar pessoas a experiências únicas.
                O Trip Planner foi criado para simplificar o planejamento de viagens, oferecendo ferramentas
                intuitivas que ajudam você a criar roteiros personalizados, definir orçamentos e compartilhar
                momentos incríveis com seus amigos.
              </p>
              <p className='text-black'>
                Nossa missão é transformar o jeito como você organiza suas viagens, tornando cada etapa do
                planejamento tão emocionante quanto o destino.
              </p>
            </div>
            <div className="text-black">
              <img src="team-working.jpg" alt="Equipe do Trip Planner" className="w-full rounded-[10px]" />
            </div>
            <div className=" text-black">
              <img src="team-working.jpg" alt="Equipe do Trip Planner" className="w-full rounded-[10px]" />
            </div>
            <div className=" text-black">
              <img src="team-working.jpg" alt="Equipe do Trip Planner" className="w-full rounded-[10px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-600 text-white py-20 text-center">
        <div className="container mx-auto text-center px-2">
          <h2 className="mb-8 text-4xl font-semibold">Nossos Valores</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex-shrink-0 w-[300px] bg-white text-gray-800 p-4 rounded-[10px] shadow-lg text-center">
              <img src="innovation-icon.png" alt="Inovação" className="w-16 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-green-500 mb-3">Inovação</h3>
              <p>Buscamos constantemente formas de tornar o planejamento mais eficiente e agradável.</p>
            </div>
            <div className="flex-shrink-0 w-[300px] bg-white text-gray-800 p-4 rounded-[10px] shadow-lg text-center">
              <img src="connection-icon.png" alt="Conexão" className="w-16 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-green-500 mb-3">Conexão</h3>
              <p>Facilitamos a união de pessoas e ideias para criar viagens inesquecíveis.</p>
            </div>
            <div className="flex-shrink-0 w-[300px] bg-white text-gray-800 p-4 rounded-[10px] shadow-lg text-center">
              <img src="simplicity-icon.png" alt="Simplicidade" className="w-16 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-green-500 mb-3">Simplicidade</h3>
              <p>Oferecemos uma plataforma acessível e intuitiva para todos os tipos de viajantes.</p>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-gray-800 text-white text-center py-12 px-5">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-center text-4xl font-bold mb-4">Pronto para começar sua próxima aventura?</h2>
          <p className="mb-8">Junte-se ao Trip Planner e transforme o planejamento de viagens em uma experiência fácil e divertida.</p>
          <a href="cadastro.html" className="bg-green-600 text-white no-underline py-3 px-6 text-lg rounded-md mt-5 inline-block">
            Inscreva-se Agora
          </a>
        </div>
      </section>
    </>
  )
}