import React, { useContext } from 'react'
import {PRODUCTS} from '../products'
import { ShopContext} from '../context/ShopContext'
import CartItem from '../components/CartItem'

const Cart = () => {
  const { cartItems, getTotal} = useContext(ShopContext);
  const totalAmount = getTotal();
  return (
    <div>
      {totalAmount > 0 ? (             
        <div>
          <h1>Your Cart Items</h1>
          <div className='flex flex-col gap-5'>
            {PRODUCTS.map((product) =>{
              if(cartItems[product.id] !== 0){
                return <CartItem data={product} />
              }
            })}
          </div>
          <div>
            <p>SubTotal: ${totalAmount}</p>
          </div>
          <div>
            <button>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        </div>
        ):(
        <div>
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  )
}

export default Cart;