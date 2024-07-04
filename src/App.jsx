import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import AppBar from './components/AppBar';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import CartPage from './pages/Cart';

const App = () => {
  return (
    <>
    <AppBar/>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
   
  );
}

export default App;
