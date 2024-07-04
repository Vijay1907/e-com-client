import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import AppBar from './components/AppBar';

const App = () => {
  return (
    <>
    <AppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Product />} />
      </Routes>
    </>
   
  );
}

export default App;
