import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Vanilla from './pages/categories/Vanilla';
import Chocolate from './pages/categories/Chocolate';

import Coustom from './pages/categories/Coustom';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

export default function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  // Sync cart with localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Function to add an item to the cart
  const addToCart = (cake) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, cake];
      return updatedCart;
    });
  };

  // Handle order and clear cart
  const handleOrderNow = () => {
    alert('Order placed successfully!');
    setCart([]); // Clear cart state
    localStorage.removeItem('cart'); // Remove cart data from localStorage
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} cart={cart} />} />
        <Route path="/Vanilla" element={<Vanilla addToCart={addToCart} cart={cart} />} />
        <Route path="/Chocolate" element={<Chocolate addToCart={addToCart} cart={cart} />} />
        
        <Route path="/Coustom" element={<Coustom addToCart={addToCart} cart={cart} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart cart={cart} handleOrderNow={handleOrderNow} />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}
