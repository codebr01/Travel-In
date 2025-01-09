export function Sections() {
    return (
      <>
        <section className="hero-contact">
          <div className="container">
            <div className="hero-content">
              <h1>Fale Conosco</h1>
              <p>
                Dúvidas, sugestões ou feedback? Estamos aqui para ouvir você. Entre em
                contato e vamos planejar juntos a sua próxima viagem inesquecível!
              </p>
              <a href="#contact-form" className="btn-primary">
                Enviar Mensagem
              </a>
            </div>
          </div>
        </section>
  
        <section className="contact-form">
          <div className="container">
            <div className="form-wrapper">
              <h2>Envie uma mensagem</h2>
              <form action="#" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Seu Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Digite seu nome"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Seu E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Escreva sua mensagem"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
  
        <section className="contact-info">
          <div className="container">
            <div className="info-grid">
              <div className="info-item">
                <h3>Email</h3>
                <p>contato@tripplanner.com</p>
              </div>
              <div className="info-item">
                <h3>Telefone</h3>
                <p>(89) 1234-5678</p>
              </div>
              <div className="info-item">
                <h3>Redes Sociais</h3>
                <p>
                  <a href="#">Instagram</a> | <a href="#">Facebook</a> |{" "}
                  <a href="#">LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }  