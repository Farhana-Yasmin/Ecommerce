import React from 'react'
import premium from '../assets/premium.png'
import hours from '../assets/hours.png'
import free from '../assets/free.png'
import cashback from '../assets/cashback.png'


const Shopex = () => {
  return (
    <>
    <section>
        <div className="container py-36 px-36">
        <div className='text-center mb-16'>
                <h4 className='font-josef text-[42px]  font-[bold] text-[#1A0B5B]'>What Shopex Offer!</h4>
            </div>

         <div className='flex gap-3 ml-28'>
         <div className='w-[23%] border-[1px] text-center h-[320px] '>
                <div className='mt-12'>
                    <img className='mx-auto' src={free} alt="vector" />
                </div>
                <h2 className='font-bold text-[22px] text-[#151875] mt-5'>24/7 Support</h2>
                <p className='mt-5'>Lorem ipsum dolor sit, amet consectetur
                   adipisicing elit. Ut facere quam 
                    odit .</p>
            </div>

            <div className='w-[23%] shadow-[#FFFFFF] text-center border-[1px]  h-[320px] '>
                <div className='mt-12'>
                    <img className='mx-auto' src={cashback} alt="vector" />
                </div>
                <h2 className='font-bold text-[22px] text-[#151875] mt-5'>24/7 Support</h2>
                <p className='mt-5'>Lorem ipsum dolor sit, amet consectetur
                   adipisicing elit. Ut facere quam 
                    odit .</p>
            </div>
            
            <div className='w-[23%] shadow-[#FFFFFF] text-center border-[1px]  h-[320px]'>
                <div className='mt-12'>
                    <img className='mx-auto' src={premium} alt="vector" />
                </div>
                <h2 className='font-bold text-[22px] text-[#151875] mt-5'>24/7 Support</h2>
                <p className='mt-5'>Lorem ipsum dolor sit, amet consectetur
                   adipisicing elit. Ut facere quam 
                    odit .</p>
            </div>
            
            <div className='w-[23%] shadow-[#FFFFFF] text-center border-[1px]  h-[320px] '>
                <div className='mt-12'>
                    <img className='mx-auto' src={hours} alt="vector" />
                </div>
                <h2 className='font-bold text-[22px] text-[#151875] mt-5'>24/7 Support</h2>
                <p className='mt-5'>Lorem ipsum dolor sit, amet consectetur
                   adipisicing elit. Ut facere quam 
                    odit .</p>
            </div>
            
            
         </div>
        </div>
    </section>
    </>
  )
}

export default Shopex
