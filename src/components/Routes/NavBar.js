import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';






const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  

  const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  
  
  background-image: linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% );
  `

  const NavUnlisted = styled.ul`
    list-style-type: none;
    background-image: linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% );
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 25px;
    gap:60px;
    
    a{
      text-decoration: none;
    }`

  const Items = styled(Link)`
   margin-right: 20px;
    font-size: 20px;
    text-transform: uppercase;
    color: #f1f1f1;
    cursor: pointer;`

  const Toggle = styled.button`
    display: none;
    position: absolute;
    right: 10px;
    top: 7px;
    padding: 5px;
    color: #000;
    font-size: 18px;`
  


  return (
    <Nav className="navBox">
      {(toggleMenu || screenWidth > 500) && (
        <NavUnlisted className="list">
         <Items className="items" to="/"><FontAwesomeIcon className="home" icon={faHouse}/>Home</Items>
        
          <Items className="items" to="/experience"><FontAwesomeIcon className="home" icon={faBriefcase}/>Experience</Items>
          <Items className="items" to="/portfolio"><FontAwesomeIcon className="gitHub" icon={faGithubSquare}/>Portfolio</Items>
          <Items className="items" to="/contact"><FontAwesomeIcon className="address" icon={faAddressCard}/>Contact</Items>
        </NavUnlisted>
      )}
      <Toggle onClick={toggleNav} className="btn">BTN</Toggle>
    </Nav>
  )
}

export default NavBar;