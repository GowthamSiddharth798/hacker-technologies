import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Nav from './Pages/Nav'; // Ensure this path matches the location of your Nav.js file
import Home from './Pages/Home';
import About from './Pages/About';

const Navigate = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default Navigate;
