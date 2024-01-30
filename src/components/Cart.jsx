import React, { useState } from 'react'
import './cart.css'
function Cart({cart, shoppingCart, removeCart,calculateTotal}) {
 
  return (
    <div className={`${cart} cartContainer`}>
        <div className="cartInner">
          <h2>Carrinho de Compras</h2>
                <table className='tableContainer'>
                <thead>
              <tr>
                <th>Item</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart.map((item) => (
                <tr key={item.id} className="product">
                  <td className="image-product"><img src={item.img} alt={item.name} /></td>
                  <td className="price">{`$${item.price.toFixed(2)}`}</td>
                  <td>
                    <input
                      type="number"
                      name={`quantity-${item.id}`}
                      value={item.quantidade}
                      className="product-qnt"
                      readOnly
                    />
                  </td>
                  <td>
                    <button
                      className="removeBtn"
                      onClick={()=> removeCart(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
                
              ))}
            </tbody>
            <div className="finalizePurchase">
              <span>Total:{`$${calculateTotal().toFixed(2)}`}</span>
              <button className='finalizePurchaseBtn'>Finalizar Compra</button>
            </div>
                </table>
        </div>
    </div>
  )
}

export default Cart;
