import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addoffer" element={<AddOffer />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
