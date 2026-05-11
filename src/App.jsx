import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Components/Common/Navbar'
import HeroSection from './Components/Common/Herosection'
import AboutSection from './Components/Common/AboutSection'
import ValuesSection from './Components/Common/ValuesSection'
import ServicesSection from './Components/Common/ServicesSection'
import FounderMessage from './Components/Common/FounderMessage'
import WhyChooseUs from './Components/Common/WhyChooseUs'
import LogoSection from './Components/Common/LogoSection'
import ContactSection from './Components/Common/ContactSection'
import Footer from './Components/Common/Footer'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal();

  return (
  <>
  <Navbar/>
  <div id="home"><HeroSection/></div>
  <div id="about"><AboutSection/></div>
  <div id="values"><ValuesSection/></div>
  <div id="founder"><FounderMessage/></div>
  <div id="services"><ServicesSection/></div>
  <div id="why-us"><WhyChooseUs/></div>
  <div id="logos"><LogoSection/></div>
  <div id="contact"><ContactSection/></div>
  <Footer/>
  </>
  )
}

export default App
