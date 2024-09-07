import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Components/NotFound";
import logements from './logements.json';
import Logement from "./Pages/Logement";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/logement/:id" element={<Logement />} />
     </Routes>
    </BrowserRouter>
  );
};


export default App;
