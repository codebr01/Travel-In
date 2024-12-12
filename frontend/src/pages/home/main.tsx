export function Main() {
  return (
    <main>
      <section className="hero">
        <h1>Planeje sua próxima viagem com facilidade!</h1>
        <p>Descubra destinos incríveis, crie roteiros personalizados e organize todos os detalhes em um só lugar.</p>
        <div className="email-input">
          <input type="email" placeholder="Seu e-mail" />
          <button className="bg-lime-300 text-lime-950 hover:bg-lime-400">Enviar</button>
        </div>
      </section>

      <section className="grid-container">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </section>

      <section className="content">
        <div className="text-content">
          <h2>Quem somos?</h2>
          <p>
            Nosso objetivo é tornar o planejamento de viagens mais simples e acessível para todos.
            Com nosso site, você pode explorar destinos incríveis, criar roteiros personalizados e organizar
            cada detalhe com facilidade. Junte-se a uma comunidade de viajantes apaixonados e descubra como transformar sonhos de viagem em realidade.
          </p>
          <button className="bg-lime-300 text-lime-950 hover:bg-lime-400">Saiba mais</button>
        </div>
        <div className="image-content"></div>
      </section>

      <section className="cards">
        <div className="card">
          <div className="card-avatar" id="item01"></div>
          <div className="card-title">Explorar Destinos</div>
          <div className="card-text">
            Descubra novos lugares e inspire-se com destinos que combinam com o seu estilo de viagem. Seja uma viagem cultural, uma aventura na natureza ou uma escapada relaxante, nosso site ajuda você a encontrar o destino perfeito.
          </div>
        </div>
        <div className="card">
          <div className="card-avatar" id="item02"></div>
          <div className="card-title">Organização Simples</div>
          <div className="card-text">
            Planeje cada detalhe da sua viagem de forma fácil e rápida. Crie roteiros personalizados, salve informações importantes e mantenha tudo organizado em um só lugar, sem complicações.
          </div>
        </div>
        <div className="card">
          <div className="card-avatar" id="item03"></div>
          <div className="card-title">Economia Inteligente</div>
          <div className="card-text">
            Otimize seu orçamento com dicas de economia e sugestões de acomodações, passagens e passeios com melhor custo-benefício. Nossa plataforma ajuda você a viajar bem gastando menos.
          </div>
        </div>
        <div className="card">
          <div className="card-avatar" id="item04"></div>
          <div className="card-title">Adicione Amigos</div>
          <div className="card-text">
            Convide seus amigos para fazer parte da mesma aventura. Planejem juntos, compartilhem ideias e alinhem cada detalhe para garantir uma viagem inesquecível para todos.
          </div>
        </div>
      </section>
    </main>
  )
}