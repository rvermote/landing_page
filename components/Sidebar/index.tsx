import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from "./SidebarElements"

const Sidebar = ({isOpen,toggle}: {isOpen:boolean, toggle: () => void}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink onClick={toggle} href="#about">
                    About
                </SidebarLink>
                <SidebarLink onClick={toggle} href="#discover">
                    Discover
                </SidebarLink>
                <SidebarLink onClick={toggle} href="#services">
                    Services
                </SidebarLink>
                <SidebarLink onClick={toggle} href="#contact">
                    Sign Up
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar