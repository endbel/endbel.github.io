import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/animations.css'
import './styles/main.css'
import './styles/reset.css'
import './styles/utilities.css'
import './styles/variables.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
