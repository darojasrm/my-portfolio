import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav-bar/Navbar";
import Home from "./components/home/Home";
import AboutMe from "./components/about-me/AboutMe";
import Projects from "./components/projects/Projects";
import Knowledge from "./components/knowledge/Knowledge";
import ContactMe from "./components/contact-me/ContactMe";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/knowledge" element={<Knowledge />}></Route>
        <Route path="/contact-me" element={<ContactMe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
