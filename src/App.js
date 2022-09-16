import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Projects from './Pages/Projects'
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from './Pages/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
         <Route path="/contact" element={<Contact />} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;