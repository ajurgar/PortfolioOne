import React from "react";
import { Link } from "react-router-dom";


const NavBar = () =>{

    return (
        <ul>
      
          <Link to="/">Home</Link>
        
      
          <Link to="/about">About</Link>
        
      
          <Link to="/portfolio">Portfolio</Link>
        
      
          <Link to="/experience">Experience</Link>
        
          <Link to="/contact">Contact</Link>
        
      </ul>
    );
}

export default NavBar;