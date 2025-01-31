import React from 'react'
import hero from "../assets/hero.png"
import herotop from "../assets/herotop.png"

const Hero = () => {
  return (
   <section className='bg-[#F2F0FF] py-9 relative overflow-hidden z-20'>
    <img className='absolute -top-16 left-12 -z-10 w-[250px]' src={herotop} alt="herotop" />
    <div className="container mx-auto">
      <div className=" flex justify-between items-center">
        <div className="w-[60%]">
            <h4 className='font-lato font-bold text-primary pb-3'>Best Furniture For Your Castle....</h4>
            <h1 className='font-josef font-bold text-[56px] pb-3'>New Furniture Collection
            Trends in 2020</h1>
            <p className='font-lato font-bold text-[#8A8FB9] pr-64 pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.</p>
            <button className='font-josef font-semibold text-[17px] bg-primary text-white py-4 px-10'>Shop Now</button>
            </div>
            
                <div className="w-[40%]">
                    <img className='w-full'  src={hero} alt="hero" />
                </div>
            
        
      </div>
    </div>
   </section>
  )
}

export default Hero
