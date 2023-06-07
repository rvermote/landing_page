"use client";
import React from 'react';
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import SideBar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import Footer from '../components/FooterSection'
import Mail from '../components/MailSection'
import {homeObjOne,homeObjTwo} from '@/components/InfoSection/Data'
import Services from '@/components/Services'
import {useState} from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services/>
      <Mail/>
      <Footer/>
    </>
  )
}
