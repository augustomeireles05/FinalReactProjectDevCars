import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import React from 'react';
import { CartProvider } from './contexts/cart.provider'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes />
      </Router>
    </CartProvider>
  );
}

export default App;
