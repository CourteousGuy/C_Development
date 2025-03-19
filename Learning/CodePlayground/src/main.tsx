import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './index.css';
import Nav from './nav';
import Footer from './util/footer';
import Main from './pages/main';
import ProductView from './pages/product-view';
import Cart from './pages/cart';

function Layout() {
  return (
    <StrictMode>
      <Nav />
      <Outlet />
      <Footer />
    </StrictMode>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="product/:productId" element={<ProductView />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
