import React from 'react'
import './aboutProduct.css'

function AboutProduct() {
  return (
    <div className='aboutProductContainer'>
      <div className='img'>

      </div>
      <div className="info">
        <h2 className='productName'>Aqui vai o nome do produto</h2>
      <span className='priceAboutProduct'>$25,99</span>
      <button className='addCartBtn'>Adicionar ao Carrinho</button>
      </div>
    </div>
  )
}

export default AboutProduct
