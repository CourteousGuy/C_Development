import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <div id="bluebox"></div>
  </StrictMode>,
)
