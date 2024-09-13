import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import AdminPanel from './pages/AdminPanel';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
