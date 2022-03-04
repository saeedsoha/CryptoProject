import React from 'react';
import './App.css';
import Container from './Components/Container';
import Parent from './Components/Parent';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Wallets from './Pages/Wallets';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/Wallets' element={<Wallets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
