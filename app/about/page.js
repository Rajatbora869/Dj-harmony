import React from 'react'
import AboutPage from './AboutPage'
import HomeAbout from '../components/HomeAbout'
import MissionVisson from './MissionVisson'
import Values from './Values'
import Footer from '../COMMON/Footer'

function page() {
  return (
    <div>
      <AboutPage/>
      <HomeAbout/>
      <MissionVisson/>
      <Values/>
      <Footer/>

    </div>
  )
}

export default page
