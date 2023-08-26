import React from 'react'
import { PRODUCTS } from '../products'
import Product from '../components/Product'

const Shop = () => {
  return (
    <div className='ml-[100px] mr-[100px] mt-[50px]'>
      <div>
        <h1>Products</h1>
        <div className='grid grid-cols-3 items-center gap-10'>
          {PRODUCTS.map((product) =>
            <Product data={product}/>
          )}
        </div>
      </div>      

    </div>
  )
}

export default Shop