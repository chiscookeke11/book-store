import React from 'react'
import "./heroStyle.css"

const Hero = () => {
  return (
    <section className='hero-section' >

        <div className="text">
            <div className="top-text">
                <h1>The <span>Smart</span> <br/>  
                Choice For <span> Future</span></h1>
                <p>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
            </div>
            <div className="search-input"> 
              
              <input type="search" placeholder='Search for a location...'/>
              <button>Continue</button>
            </div>
           
        </div>
        <div className="right-image">
              <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734697428/OBJECTS_lxz96w.svg" alt="" />
           
            </div>

            <div className="extra-images ruler"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734697798/Group_r2kcje.svg" alt="" /></div>
            <div className="extra-images light-bulb"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698068/Group_4_yegkzz.svg" alt="" /></div>
            <div className="extra-images conical-flask"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698079/Group_5_qvgy0h.svg" alt="" /></div>
            <div className="extra-images set-square"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698071/Group_6_kuq2gk.svg" alt="" /></div>
            <div className="extra-images globe"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698069/Group_3_fvhsxr.svg" alt="" /></div>
            <div className="extra-images pencil"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698069/Group_2_frosv1.svg" alt="" /></div>
            <div className="extra-images atom"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734698070/Group_1_ssx2rx.svg" alt="" /></div>
            <div className="extra-images monitor"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734746603/monitor_orssvm.png" alt="" /></div>
     
    </section>
  )
}

export default Hero