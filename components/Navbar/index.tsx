"use client";
import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}: {toggle: () => void}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Gonexus</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/sign_in'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar