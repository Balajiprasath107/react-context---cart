import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cartstate from './components/context.jsx'

createRoot(document.getElementById('root')).render(
  <Cartstate>
    <App />
  </Cartstate>
)
