import React from "react";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import AddOffer from "./AddOffer";
import Home from "./Home";
import Product from "./Product";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addoffer" element={<AddOffer />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
