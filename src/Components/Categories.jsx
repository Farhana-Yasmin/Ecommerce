import React from 'react'
import Trea from '../assets/Trea.png'
import images from '../assets/images.png'


const Categories = () => {
  return (
    <>
      <section className='py-32 px-32'>
        <div className='container '>   
        <div className='text-center mb-16'>
                <h4 className='font-josef text-[42px]  font-[bold] text-[#1A0B5B]'>Top Categories</h4>
            </div>

           <div className='flex gap-5 '>
           <div className='h-[345px] w-[269px]'>
         <div className='bg-[#F6F7FB] h-[269px] w-[269px] rounded-full'>
              <img className='mx-auto pt-12' src= {images} alt="" />
            </div>
            <p className='font-josef text-[20px] text-[#1A0B5B] pl-12 mt-5'>Mini LCV Chair</p>
            <p className='font-josef text-[16px] text-[#1A0B5B] pl-12'>$56.00</p>
         </div>

         <div className='h-[345px] w-[269px]'>
         <div className='bg-[#F6F7FB] h-[269px] w-[269px] rounded-full'>
              <img className='mx-auto pt-12' src= {Trea} alt="" />
            </div>
            <p className='font-josef text-[20px] text-[#1A0B5B] pl-12 mt-5'>Mini LCV Chair</p>
            <p className='font-josef text-[16px] text-[#1A0B5B] pl-12'>$56.00</p>
         </div>

         <div className='h-[345px] w-[269px]'>
         <div className='bg-[#F6F7FB] h-[269px] w-[269px] rounded-full'>
              <img className='mx-auto pt-12' src= {Trea} alt="" />
            </div>
            <p className='font-josef text-[20px] text-[#1A0B5B] pl-12 mt-5'>Mini LCV Chair</p>
            <p className='font-josef text-[16px] text-[#1A0B5B] pl-12'>$56.00</p>
         </div>

         <div className='h-[345px] w-[269px]'>
         <div className='bg-[#F6F7FB] h-[269px] w-[269px] rounded-full'>
              <img className='mx-auto pt-12' src= {Trea} alt="" />
            </div>
            <p className='font-josef text-[20px] text-[#1A0B5B] pl-12 mt-5'>Mini LCV Chair</p>
            <p className='font-josef text-[16px] text-[#1A0B5B] pl-12'>$56.00</p>
         </div>
           </div>

        </div>
           
      </section>
      
    </>
  )
}

export default Categories

