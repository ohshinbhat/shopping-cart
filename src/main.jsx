import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { IconContext } from 'react-icons/lib'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IconContext.Provider value={{ color: 'white', size: '50px' }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
)
