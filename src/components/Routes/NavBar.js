import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const NavBar = () =>{

  // const Ul = styled.ul`
  // display: flex;
  // justify-content: center;
  // gap: 100px;
  // font-size: 28px;
  // padding: 30px;
  // margin-right: 150px;
  // `;

  
    return (
      <nav>


      
        <ul className="list">
      
          <Link className="items" to="/">Home</Link>
        
      
          <Link className="items" to="/about">About</Link>
        
      
          <Link className="items" to="/portfolio">Portfolio</Link>
        
      
          <Link className="items" to="/experience">Experience</Link>
        
          <Link className="items" to="/contact">Contact</Link>
        
      </ul>
      </nav>
    );
}

export default NavBar;