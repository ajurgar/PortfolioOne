import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './NavBar.css'




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
  height: 50px;
  background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
  `

  const NavUnlisted = styled.ul`
    list-style-type: none;
    background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 25px;
    
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
    <Nav>
      {(toggleMenu || screenWidth > 500) && (
        <NavUnlisted className="list">
          <Items className="items" to="/">Home</Items>
          <Items className="items" to="/about">About</Items>
          <Items className="items" to="/portfolio">Portfolio</Items>
          <Items className="items" to="/experience">Experience</Items>
          <Items className="items" to="/contact">Contact</Items>
        </NavUnlisted>
      )}
      <Toggle onClick={toggleNav} className="btn">BTN</Toggle>
    </Nav>
  )
}

export default NavBar;