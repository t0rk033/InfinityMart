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
          <h3>About</h3>
          <ul>
              <li><a href="">History</a></li>
              <li><a href="">Our Team</a></li>
              <li><a href="">Brand Guiddins</a></li>
              <li><a href="">Terms&Condition</a></li>
              <li><a href="">PrivacyPolicy</a></li>
          </ul>
        </div>

        <div className="services-footer">
          <h3>Services</h3>
          <ul>
              <li><a href="">How to Order</a></li>
              <li><a href="">Our Product</a></li>
              <li><a href="">Order Status</a></li>
              <li><a href="">Promo</a></li>
              <li><a href="">Payment Method</a></li>
          </ul>
        </div>

        <div className="other">
          <h3>Other</h3>
          <ul>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Help</a></li>
              <li><a href="">Privacy</a></li>
          </ul>
        </div>
   
  </footer>
  )
}

export default Footer;
