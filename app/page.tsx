"use client";
import Image from 'next/image'
import Navbar from '../components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'

export default function Home() {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}
