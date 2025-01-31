import React from 'react'
import Recta from '../assets/Recta.png'
import Rectan from '../assets/Rectan.png'
import Rectang from '../assets/Rectang.png'
import Rectangl from '../assets/Rectangl.png'
import { RiStarSFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";



const Products1 = () => {
  return (
    <>
     <section className='px-32 '>
        <div className="container shadow-xl mt-20 w-[1170px] h-[509px] flex gap-9">
            <div className='flex gap-3 mt-2'>
                <div className=''>
                
                   <img  src={Rectan} alt="" />
                   <img className='mt-3' src={Rectang} alt="" />
                   <img className='mt-3' src={Rectangl} alt="" />                 
                </div>
                <div>
                <img src={Recta} alt="" />
                </div>
            </div>

            <div className='mt-16'>
              <h4 className='font-josef text-[#0D134E] text-[36px] font-bold'>Playwood arm chair</h4>

              <div className='flex gap-1 mt-4'>
              <RiStarSFill className='text-[#FFC416]' />
              <RiStarSFill className='text-[#FFC416]' />
              <RiStarSFill className='text-[#FFC416]' />
              <RiStarSFill className='text-[#FFC416]' />
              <RiStarSFill className='text-[#FFC416]' />
              <p className='font-josef text-[#0D134E] text-[14px]'>(22)</p>
              </div>

              <div className='flex gap-5 mt-5'>
              <p className='font-josef text-[#0D134E] text-[16px]'>$32.00</p>
              <del className='font-josef text-primary text-[16px]'>$32.00</del>
              </div >
              <p className='font-josef text-[#0D134E] text-[16px] mt-4'>Color</p>
              <p className='font-josef text-[#A9ACC6] text-[16px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Mauris tellus <br /> porttitor purus, et volutpat sit.</p>


                <div className='flex gap-5'>
                <p className='font-josef text-[#0D134E] text-[16px] mt-4'>Add To cart</p>
                <FaRegHeart className='mt-5 text-[#0D134E]' />
                </div>
               
                <p className='font-josef text-[#0D134E] text-[16px] mt-4'>Categories:</p>
                <p className='font-josef text-[#0D134E] text-[16px] mt-4'>Tags</p>

                <div className='flex gap-3'>
                <p className='font-josef text-[#0D134E] text-[16px] mt-4'>Share</p>
                 <FaFacebookF className='bg-[#151875] w-5 h-5 flex justify-center items-center rounded-full
                  text-white mt-4'/>
                 <AiFillInstagram  className='bg-primary w-5 h-5 flex justify-center items-center rounded-full
                  text-white mt-4'/>
                    <FaTwitter  className='bg-[#151875] w-5 h-5 flex justify-center items-center rounded-full
                  text-white mt-4'/>
                
                </div>
               


            </div>
        </div>
        
        </section> 
    </>
  )
}

export default Products1
