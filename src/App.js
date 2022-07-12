import React from "react";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import AddOffer from "./AddOffer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addoffer" element={<AddOffer />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
