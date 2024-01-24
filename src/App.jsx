import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import Testimonials from './components/Testimonials'

import './index.css'

function App() {
 

  return (

    <React.Fragment>   
      <Navbar/>
     <Hero/>
      <Services/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
      
    </React.Fragment>
  )
}

export default App
