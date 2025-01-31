import React from 'react'
import { Link } from 'react-router-dom'

const Reusable = (ra) => {
  return (
    <>
      <section className='bg-[#F6F5FF] h-[286px] px-32 py-24'>
        <div className="container mx-auto">
          <div className='flex  '>
            <h2 className='text-[#101750] font-josef font-bold text-4xl pb-2 '>{ra.title}</h2>
            <div className='flex items-center justify-center -ml-64 mt-10 pl-20'>
              <Link to={"/"} className='font-lato text-sm text-black'>Home</Link>
              <Link to={"/pages"} className='font-lato text-sm text-black'> . Pages</Link>
              <Link to={"/farhana"} className='font-lato text-sm text-primary'> {ra.titlename}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reusable
