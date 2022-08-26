import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Routes/Home';
import About from './components/Routes/About';
import Experience from './components/Routes/Experience';
import Portfolio from './components/Routes/Portfolio';
import Contact from './components/Routes/Contact';
import ErrorPage from './components/Routes/ErrorPage'
import NavBar from './components/Routes/NavBar'



function App() {

  return (
    <Router>
    <div className ="navbar">
    <NavBar/>    
    </div>
   
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/experience" element={<Experience/>} />
      <Route path="/portfolio" element={<Portfolio/>} />


       <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </Router>
  );
}


export default App;
