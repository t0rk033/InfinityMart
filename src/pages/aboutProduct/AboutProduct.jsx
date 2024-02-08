import React from 'react';
import { useLocation } from 'react-router-dom';
import './aboutProduct.css';

function AboutProduct() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const name = params.get('name');
  const price = params.get('price');
  const img = params.get('img');

  const {addCart} = location.state || {}
 

  return (
    <div className='aboutProductContainer'>
        <img src={img} alt={name}className='img-aboutProduct' />
      <div className="info">
        <h2 className='productName'>{name}</h2>
        <span className='priceAboutProduct'>{`$${price}`}</span>
        <button className='addCartBtn' onClick={() => addCart({id, name, price, img})} >Adicionar ao Carrinho</button>
      </div>
    </div>
  );
}

export default AboutProduct;
