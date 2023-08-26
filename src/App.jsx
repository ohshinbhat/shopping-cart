import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import { ShopContextProvider } from './context/ShopContext'

const App = () => {
  return (
    <div className='bg-black min-h-screen w-screen'>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>        
      </ShopContextProvider>

    </div>
  )
}

export default App