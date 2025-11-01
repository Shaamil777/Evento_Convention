import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/sections/HeroSection'
import IntroSection from '../components/sections/IntroSection'
import FeatureSection from '../components/sections/FeatureSections'
import GallarySection from '../components/sections/GallarySection'
import ContactSection from '../components/sections/ContactSection'
import VideoSection from '../components/sections/VideoSection'

function MainPage() {
  return (
    <>
   

    <Navbar/>
    <HeroSection/>
    <IntroSection/>
    <FeatureSection/>
   <VideoSection/>
   <GallarySection/>
   <ContactSection/>
    </>
  )
}

export default MainPage