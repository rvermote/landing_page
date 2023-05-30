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
                <SidebarLink to="about">
                    About
                </SidebarLink>
                <SidebarLink to="discover">
                    Discover
                </SidebarLink>
                <SidebarLink to="services">
                    Services
                </SidebarLink>
                <SidebarLink to="sign_up">
                    Sign Up
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/sign_in">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar