import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './nav'
import Heading from './sections/heading/heading'
import Products from './sections/products/products'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <Heading />
    <Products />
    <div id="bluebox"></div>
  </StrictMode>,
)
