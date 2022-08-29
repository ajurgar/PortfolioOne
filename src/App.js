import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Routes/Home';
import Experience from './components/Routes/Experience';
import Portfolio from './components/Routes/Portfolio';
import Contact from './components/Routes/Contact';
import ErrorPage from './components/Routes/ErrorPage'
import NavBar from './components/Routes/NavBar'




function App() {

  //add
  return (
    <div>
      <div className="App">

        <Router>
          <header id="header">
            <div className="navbar">
              <NavBar />

            </div>

          </header>

          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
        </Router>

        <footer id="footer">
          <h4>Website developed by Alejandro Garcia </h4>
        </footer>

      </div>

    </div>



  );
}


export default App;
