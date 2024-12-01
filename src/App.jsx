import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RootPage from './pages/RootPage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import SinglePage from './pages/SinglePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import Mypage from './pages/Mypage';
import { CartProvider } from './pages/Cart';

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/root" element={<RootPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:productId" element={<SinglePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
