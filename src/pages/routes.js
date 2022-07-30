//routes
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Product from './Product';




export default function MainRoutes() {
    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Product />} />
        </Routes>
   
    );
}