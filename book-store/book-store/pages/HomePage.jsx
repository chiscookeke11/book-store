import React from 'react'
import Hero from '../components/herosection/Hero'
import PointBanner from '../components/pointsbanner/PointBanner'


const HomePage = () => {
  return (
    <div style={{
      backgroundColor: "F5F5F5",
    }} >
        <Hero/>
        <PointBanner/>
    </div>
  )
}

export default HomePage