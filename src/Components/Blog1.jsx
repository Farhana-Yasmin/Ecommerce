import React from 'react'
import bru from '../assets/bru.png'
import bruc from '../assets/bruc.png'
import bruce from '../assets/bruce.png'
import { GoDotFill } from "react-icons/go";
import { FaPenNib } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";

const Blog1 = () => {


  return (
    <>
     <section className='px-28'>
        <div className="container mt-24 ">
            <div>
                <img className='h-[453px] w-[800px]' src={bruce} alt="" />

              <div className='flex gap-6 '>
              <div className='flex mt-7 gap-2'>
                    <FaPenNib className='text-primary mt-1' />
                    <button className='h-[23px] w-[160px] bg-[#FFE7F9]'>
                        <p className='font-josef font-[14px] text-[#151875]'>Surf Auxion</p>
                    </button>
                </div>
                <div className='flex mt-7 gap-2'>
                    <LuCalendarDays className='text-primary mt-1' />
                    <button className='h-[23px] w-[160px] bg-[#FFE7F9]'>
                        <p className='font-josef font-[14px] text-[#151875]'>Aug 09 2020</p>
                    </button>
                </div>
              </div>

            
          <h3 className='font-josef text-[#0D134E] text-[24px] mt-10 font-bold'
          >Mauris at orci non vulputate diam tincidunt nec.</h3>
          <p className='font-josef text-[#A9ACC6] text-[16px] mt-7'>Lorem ipsum dolor sit amet, adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum <br /> eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>

               <div className='flex '>
                <h3 className='text-[#151875] text-[18px] mt-7'>Read More</h3>
                <GoDotFill className='text-primary mt-9'/>

               </div>
          
            </div>

            <div className='mt-10'>
                <img className='h-[453px] w-[800px]' src={bruc} alt="" />

              <div className='flex gap-6 '>
              <div className='flex mt-7 gap-2'>
                    <FaPenNib className='text-primary mt-1' />
                    <button className='h-[23px] w-[160px] bg-[#FFE7F9]'>
                        <p className='font-josef font-[14px] text-[#151875]'>Surf Auxion</p>
                    </button>
                </div>
                <div className='flex mt-7 gap-2'>
                    <LuCalendarDays className='text-primary mt-1' />
                    <button className='h-[23px] w-[160px] bg-[#FFE7F9]'>
                        <p className='font-josef font-[14px] text-[#151875]'>Aug 09 2020</p>
                    </button>
                </div>
              </div>

            
          <h3 className='font-josef text-[#0D134E] text-[24px] mt-10 font-bold'
          >Mauris at orci non vulputate diam tincidunt nec.</h3>
          <p className='font-josef text-[#A9ACC6] text-[16px] mt-7'>Lorem ipsum dolor sit amet, adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum <br /> eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>

               <div className='flex '>
                <h3 className='text-[#151875] text-[18px] mt-7'>Read More</h3>
                <GoDotFill className='text-primary mt-9'/>

               </div>
          
            </div>
            <div className='mt-10'>
                <img className='h-[453px] w-[800px]' src={bru} alt="" />

              <div className='flex gap-6 '>
              <div className='flex mt-7 gap-2'>
                    <FaPenNib className='text-primary mt-1' />
                    <button className='h-[23px] w-[160px] bg-[#FFE7F9]'>
                        <p className='font-josef font-[14px] text-[#151875]'>Surf Auxion</p>
                    </button>
                </div>
                <div className='flex mt-7 gap-2'>
                    <LuCalendarDays className='text-primary mt-1' />
                    <button className='h-[23px] w-[160px] bg-[#FFE7F9]'>
                        <p className='font-josef font-[14px] text-[#151875]'>Aug 09 2020</p>
                    </button>
                </div>
              </div>

            
          <h3 className='font-josef text-[#0D134E] text-[24px] mt-10 font-bold'
          >Mauris at orci non vulputate diam tincidunt nec.</h3>
          <p className='font-josef text-[#A9ACC6] text-[16px] mt-7'>Lorem ipsum dolor sit amet,adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum <br /> eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>

               <div className='flex '>
                <h3 className='text-[#151875] text-[18px] mt-7'>Read More</h3>
                <GoDotFill className='text-primary mt-9'/>

               </div>
          
            </div>
        </div>
        </section> 
    </>
  )
}

export default Blog1
