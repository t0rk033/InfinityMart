import React from 'react'
import './footer.css'
function Footer() {
  return (
    <footer>
    <div className="title-footer">
        <h3>InfinityMart</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sit tenetur distinctio praesentium debitis maxime, iste consequuntur vitae excepturi deserunt.</p>
        <div className="social-media">
          <i className='bx bxl-instagram'></i>
          <i className='bx bxl-facebook-circle' ></i>
          <i className='bx bxl-twitter'></i>
          <i className='bx bxl-whatsapp'></i>
        </div>
      </div>
        <div className="about-footer">
          <h3>Sobre</h3>
          <ul>
              <li><a href="">Historia</a></li>
              <li><a href="">Nosso Time</a></li>
              <li><a href="">Diretrizes da Marca</a></li>
              <li><a href="">Termos e condições</a></li>
              <li><a href="">Politica de Privacidade</a></li>
          </ul>
        </div>

        <div className="services-footer">
          <h3>Serviços</h3>
          <ul>
              <li><a href="">Como Comprar</a></li>
              <li><a href="">Nossos Produtos</a></li>
              <li><a href="">Status da Compra</a></li>
              <li><a href="">Promo</a></li>
              <li><a href="">Método de Pagamento</a></li>
          </ul>
        </div>

        <div className="other">
          <h3>Outros</h3>
          <ul>
              <li><a href="">Contato</a></li>
              <li><a href="">Ajuda</a></li>
              <li><a href="">Privacidade</a></li>
          </ul>
        </div>
   
  </footer>
  )
}

export default Footer;
