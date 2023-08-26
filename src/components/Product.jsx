import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';


const Product = (props) => {
    const {id, productName, price, productImage} = props.data;

    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        <div>
            <div className=' border-slate-800 border-2 rounded-lg'>
            <img src={productImage} className='rounded-lg scale-75'/>

            </div>
            
            <div className='text-white text-center justify-center'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <div className='flex text-white justify-center'>
                <button className='text-center  bg-slate-400 w-[120px]' onClick={() => addToCart(id)}>
                    Add To Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
                </button>
            </div>
        </div>
  )
}

export default Product