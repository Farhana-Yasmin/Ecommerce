import React from 'react'
import leas from '../assets/leas.png'
import leastb from '../assets/leastb.png'
import least from '../assets/least.png'
import { FaPenNib } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";

const LeastBlog = () => {
  return (
    <>

    <section className=' px-32'>

        <div className='container mx-auto'>
            <div className='text-center'>
                <h2 className='font-josef text-[42px]  font-[bold] text-[#1A0B5B] mb-8'>Leatest Blog</h2>
            </div>
            

            <div className='flex gap-8'>
                
            <div className='shadow-lg h-[493px] w-[370px]'>
                <div>
                    <img src={leas} alt="" />
                </div>

                <div className='flex gap-5 ml-3 '>
                    <p className='font-josef font-[14px] text-[#151875] flex items-center gap-3 mt-4 '>
                        <FaPenNib className='text-primary' />SaberAli</p>
                        
                        <p className='font-josef font-[14px] text-[#151875] flex items-center gap-2 mt-4'> 
                            <LuCalendarDays className='text-[#FFA454]' /> 21 August,2020</p>
                </div> 

                <p className='font-[18px] font-josef text-[#151875] mt-5 font-[bold] ml-3'>Top esssential Trends in 2021</p>

                <h1 className='font-lato text-[#72718F] text-[16px] mt-5 ml-3'>More off this less hello samlande lied 
                    much
                 </h1>
                 <h1 className='font-lato text-[#72718F] text-[16px] ml-3'>over tightly circa horse taped mightly</h1>

                <p className='text-[16px] text-[#151875] font-lato mt-5 ml-3'>Read More</p>

            </div>
            
            <div className='shadow-lg h-[493px] w-[370px]'>
                <div>
                    <img src={leastb} alt="" />
                </div>

                <div className='flex gap-5 ml-3 '>
                    <p className='font-josef font-[14px] text-[#151875] flex items-center gap-3 mt-4 '>
                        <FaPenNib className='text-primary' />SaberAli</p>
                        
                        <p className='font-josef font-[14px] text-[#151875] flex items-center gap-2 mt-4'> 
                            <LuCalendarDays className='text-[#FFA454]' /> 21 August,2020</p>
                </div> 

                <p className='font-[18px] font-josef text-[#151875] mt-5 font-[bold] ml-3'>Top esssential Trends in 2021</p>

                <h1 className='font-lato text-[#72718F] text-[16px] mt-5 ml-3'>More off this less hello samlande lied 
                    much
                 </h1>
                 <h1 className='font-lato text-[#72718F] text-[16px] ml-3'>over tightly circa horse taped mightly</h1>

                <p className='text-[16px] text-[#151875] font-lato mt-5 ml-3'>Read More</p>

            </div>
            
            <div className='shadow-lg h-[493px] w-[370px]'>
                <div>
                    <img src={least} alt="" />
                </div>

                <div className='flex gap-5 ml-3 '>
                    <p className='font-josef font-[14px] text-[#151875] flex items-center gap-3 mt-4 '>
                        <FaPenNib className='text-primary' />SaberAli</p>
                        
                        <p className='font-josef font-[14px] text-[#151875] flex items-center gap-2 mt-4'> 
                            <LuCalendarDays className='text-[#FFA454]' /> 21 August,2020</p>
                </div> 

                <p className='font-[18px] font-josef text-[#151875] mt-5 font-[bold] ml-3'>Top esssential Trends in 2021</p>

                <h1 className='font-lato text-[#72718F] text-[16px] mt-5 ml-3'>More off this less hello samlande lied 
                    much
                 </h1>
                 <h1 className='font-lato text-[#72718F] text-[16px] ml-3'>over tightly circa horse taped mightly</h1>

                <p className='text-[16px] text-[#151875] font-lato mt-5 ml-3'>Read More</p>

            </div>
            </div>

            
        </div>
    </section>
      
    </>
  )
}

export default LeastBlog
