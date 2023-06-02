"use client"
import React from 'react'
import {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLogo2} from './NavbarElements'

const Navbar = ({toggle}: {toggle: () => void}) => {

  const [scrollNav, setScrollNav] = useState<boolean>(false)
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  },[])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer >
          <NavLogo href="#hero">Gonexus</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks href="#about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavLogo2 href="#hero">Gonexus</NavLogo2>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar