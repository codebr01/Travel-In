export function Sections() {
  return (
    <>
    <section class="hero-contact">
        <div class="container">
            <div class="hero-content">
                <h1>Fale Conosco</h1>
                <p>
                    Dúvidas, sugestões ou feedback? Estamos aqui para ouvir você. 
                    Entre em contato e vamos planejar juntos a sua próxima viagem inesquecível!
                </p>
                <a href="#contact-form" class="btn-primary">Enviar Mensagem</a>
            </div>
        </div>
    </section>    

    <section class="contact-form">
        <div class="container">
            <div class="form-wrapper">
                <h2>Envie uma mensagem</h2>
                <form action="#" method="POST">
                    <div class="form-group">
                        <label for="name">Seu Nome</label>
                        <input type="text" id="name" name="name" placeholder="Digite seu nome" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Seu E-mail</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Mensagem</label>
                        <textarea id="message" name="message" placeholder="Escreva sua mensagem" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn-submit">Enviar</button>
                </form>
            </div>
        </div>
    </section>

    <section class="contact-info">
        <div class="container">
            <div class="info-grid">
                <div class="info-item">
                    <h3>Email</h3>
                    <p>contato@tripplanner.com</p>
                </div>
                <div class="info-item">
                    <h3>Telefone</h3>
                    <p>(89) 1234-5678</p>
                </div>
                <div class="info-item">
                    <h3>Redes Sociais</h3>
                    <p>
                        <a href="#">Instagram</a> | 
                        <a href="#">Facebook</a> | 
                        <a href="#">LinkedIn</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}