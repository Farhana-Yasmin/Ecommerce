import React from 'react'
import Farhana from '../assets/Farhana.png'
import Farhan from '../assets/Farhan.png'
import Farha from '../assets/Farha.png'
import Farh from '../assets/Farh.png'
import { RiStarSFill } from "react-icons/ri";

const Products3 = () => {
  return (
    <>
      <section className='px-32 mt-12'>
        <div className="container mx-auto pl-5">
             <div>
             <h3 className='font-josef text-[#0D134E] text-[36px] mt-10'>Related Products</h3>
             </div>

           <div className='flex gap-5'>
            <div>
            <div className='mt-5'>
                <img  src={Farhana} alt="" />
            </div>
           <div className="flex gap-5">
          <div className="">
          <p className='font-josef text-[#0D134E] text-[16px] mt-5'>Mens Fashion Wear</p>
          </div>
                <div className='flex mt-6'>
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#B2B2B2]' />
                </div>
           </div>
           <p  className='font-josef text-[#0D134E] text-[13px] mt-5'>$43.00</p>
            </div>

            <div>
            <div className='mt-5'>
                <img  src={Farhan} alt="" />
            </div>
           <div className="flex gap-10">
          <div className="">
          <p className='font-josef text-[#0D134E] text-[16px] mt-5'>Women’s Fashion</p>
          </div>
                <div className='flex mt-6'>
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#FFC416]' />
                </div>
           </div>
           <p  className='font-josef text-[#0D134E] text-[13px] mt-5'>$67.00</p>
            </div>

            <div>
            <div className='mt-5'>
                <img  src={Farha} alt="" />
            </div>
           <div className="flex gap-3">
          <div className="">
          <p className='font-josef text-[#0D134E] text-[16px] mt-5'>Wolx Dummy Fashion</p>
          </div>
                <div className='flex mt-6'>
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#B2B2B2]' />
                </div>
           </div>
           <p  className='font-josef text-[#0D134E] text-[13px] mt-5'>$67.00</p>
            </div>

            <div>
            <div className='mt-5'>
                <img  src={Farh} alt="" />
            </div>
           <div className="flex gap-2">
          <div className="">
          <p className='font-josef text-[#0D134E] text-[16px] mt-5'>Top Wall Digital Clock</p>
          </div>
                <div className='flex mt-6'>
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#FFC416]' />
                <RiStarSFill className='text-[#B2B2B2]' />
                <RiStarSFill className='text-[#B2B2B2]' />
                </div>
           </div>
           <p  className='font-josef text-[#0D134E] text-[13px] mt-5'>$51.00</p>
            </div>
            
           </div>
        </div>
      </section>
    </>
  )
}

export default Products3
