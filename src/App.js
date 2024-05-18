// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "../src/components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Switches from "./components/Switches";
import Lights from "./components/Lights";
import Wires from "./components/Wires";
import Fans from "./components/Fans";

const App = () => {
  return (
    <Router style={{ width: "100%" }}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/switches" element={<Switches />} />
          <Route path="/products/lights" element={<Lights />} />
          <Route path="/products/fans" element={<Fans />} />
          <Route path="/products/wires" element={<Wires />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
