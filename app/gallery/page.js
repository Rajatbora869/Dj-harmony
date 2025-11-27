import React from 'react'
import GalleryPage from './GalleryPage'
import GalleryCard from './GalleryCard'
import PerfectShoww from '../COMMON/PerfectShoww'
import Footer from '../COMMON/Footer'

function page() {
  return (
    <div>
      <GalleryPage/>
      <GalleryCard/>
      <PerfectShoww/>
      <Footer/>
    </div>
  )
}

export default page
