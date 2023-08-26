import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className=' w-full '>
        <div className='flex flex-row justify-around pt-5 items-center'>
            <Link to='/' className='text-white font-bold text-5xl'>Shop.</Link>
            <Link to='/cart'><AiOutlineShoppingCart /></Link>
        </div>
        
    </div>
  )
}

export default Navbar