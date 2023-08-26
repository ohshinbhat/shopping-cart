import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';


const CartItem = (props) => {
  const { id, productName, price, productImage} = props.data;
  const {cartItems, addToCart, removeFromCart, updateCartItemCount} =useContext(ShopContext);

  return (
    <div>
        <div className=''>
            <img src={productImage} className='rounded-lg scale-50'/>
        </div>
        <div className='text-white text-center justify-center'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
        <div>
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)}>+</button>
        </div>

    </div>
  )
}

export default CartItem