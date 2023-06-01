"use client";
import Image from 'next/image'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import SideBar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import {homeObjOne,homeObjTwo} from '@/components/InfoSection/Data'
import Services from '@/components/Services'
import {BrowserRouter as Router} from 'react-router-dom'
import {useState} from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services/>
    </Router>
  )
}
