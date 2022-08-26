import React from "react";
import { Link } from "react-router-dom";



const NavBar = () =>{

    return (
        <ul className="navbarBox">
      
          <Link className="home" to="/">Home</Link>
        
      
          <Link className="about" to="/about">About</Link>
        
      
          <Link className="portfolio" to="/portfolio">Portfolio</Link>
        
      
          <Link className="experience" to="/experience">Experience</Link>
        
          <Link className="contact" to="/contact">Contact</Link>
        
      </ul>
    );
}

export default NavBar;