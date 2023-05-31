import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen,toggle}: {isOpen:boolean, toggle: () => void}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink onClick={toggle} to="about">
                    About
                </SidebarLink>
                <SidebarLink onClick={toggle} to="discover">
                    Discover
                </SidebarLink>
                <SidebarLink onClick={toggle} to="services">
                    Services
                </SidebarLink>
                <SidebarLink onClick={toggle} to="sign_up">
                    Sign Up
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute onClick={toggle} to="/sign_in">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar