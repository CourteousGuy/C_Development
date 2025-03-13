import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './nav'
import Heading from './sections/heading/heading'
import Products from './sections/products/products'
import Benefits from './sections/benefits/benefits'
import Testimonials from './sections/testimonials/testimonials'
import Popular from './sections/popular/popular'
import Footer from './sections/footer/footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <Heading />
    <Products />
    <Benefits />
    <Testimonials />
    <Popular />
    <Footer />
  </StrictMode>,
)
