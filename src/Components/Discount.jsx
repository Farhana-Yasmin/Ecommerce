import React from 'react'
import { GoDotFill } from "react-icons/go";
import Tortuga from '../assets/Tortuga.png'
import { IoMdCheckmark } from "react-icons/io";

const Discount = () => {
  return (
    <>

      <section className='py-32 px-32'>
        <div className='h-[597px] w-[1214px]'>
          
        <div className='container mx-auto justify-items-center pr-28'>
                <h4 className='font-josef text-[42px]  font-[bold] text-[#151875]'>Discount Item</h4>

            <div className='flex justify-between gap-3'>
                <p className='text-[#FB4997] flex items-center font-lato'> 
                Wood Chair <GoDotFill /></p>
                <p className='font-lato text-[#151875]'>Plastic Chair</p>
                <p className='font-lato text-[#151875]'>Sofa Collection</p>
            </div>
            </div>

            <div className='flex'>
              <div className='mt-12 '> 
                <p className='text-[35px] text-[#151875]'>20% Discount Of All Products</p>
                 <p className='text-[21px] text-[#FB2E86] mt-4'>Eams Sofa Compact</p>
                 <p className='text-[#B7BACB] text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Eu eget feugiat habitasse nec, bibendum condimentum.</p>

                 <div className='flex gap-8 mt-5'>
                  <p className='flex text-[#B7BACB]  '><IoMdCheckmark />Material expose like metals</p>
                  <p className='flex text-[#B7BACB] '><IoMdCheckmark />Clear lines and geomatric figures</p>
                 </div>

                 <div className='flex gap-8 mt-5'>
                  <p className='flex text-[#B7BACB]'><IoMdCheckmark />Simple neutral colours.</p>
                  <p className='flex text-[#B7BACB]'><IoMdCheckmark />Material expose like metals</p>
                 </div>
              </div>
              <div>
                <img src= {Tortuga} alt="" />
              </div>
            </div>
                  <div className='pb-12'>
                  <button className='h-12 w-32 bg-primary text-white'>Shop Now</button>
                  </div>
                 
                

        </div>
        
      </section>
      
    </>
  )
}

export default Discount
