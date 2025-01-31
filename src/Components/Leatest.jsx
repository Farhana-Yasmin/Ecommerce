import React from 'react'
import images from '../assets/images.png'
import Meherab from '../assets/Meherab.png'
import Mehera from '../assets/Mehera.png'
import Meher from '../assets/Meher.png'
import Mehe from '../assets/Mehe.png'
import Meh from '../assets/Meh.png'
import Me from '../assets/Me.png'
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { LuSearchX } from "react-icons/lu";

const Leatest = () => {
  return (
    <>

    <section>
        <div className="container py-36 px-36">
        <div className='text-center'>
                <h4 className='font-josef text-[42px]  font-[bold] text-[#1A0B5B]'>Leatest Products</h4>
            </div>
            <div className='flex gap-10 mx-auto pb-12 text-center pl-64 pr-24'>
                <p className='text-primary font-lato text-[18px] underline'>New Arrival</p>
                <p className='font-lato text-[18px]'>Best Seller</p>
                <p className='font-lato text-[18px]'>Featured</p>
                <p className='font-lato text-[18px]'>Special Offer</p>
            </div>


            <div className='mt-5 flex gap-5'>

              <div className='bg-[#F7F7F7] h-[269px] w-[360px]'>
                <img className='pl-16 pt-8' src={Meherab} alt="" />
                <div className='flex justify-between'>
                <p className='font-josef text-[#151875] text-[16px] mt-3'>Comfort Handy Craft</p>
                <div className='flex gap-2'>
                <p className='font-josef text-[#151875] text-[14px] mt-3'>$42.00</p>
                <del  className='font-josef text-primary text-[14px] mt-3'>$65.00</del>
                </div>
                </div>
              </div>


              <div className=' h-[269px] w-[360px]'>
              <div className='flex'>
              <div className='mt-28 gap-6'>
              <BsCart3 className='mt-4 text-[#2F1AC4]'/>
              <FaRegHeart className='mt-4 text-[#2F1AC4]' />
              <LuSearchX className='mt-4 text-[#2F1AC4]'/>            
                  </div>
              <div>
              <img className='pl-16 pt-4' src={Mehera} alt="" />
                  <div className='flex justify-between mt-2'>
                  <p className='font-josef text-[#151875] text-[16px] mt-3'>Comfort Handy Craft</p>
                  <div className='flex gap-2'>
                  <p className='font-josef text-[#151875] text-[14px] mt-3'>$42.00</p>
                  <del  className='font-josef text-primary text-[14px] mt-3'>$65.00</del>
                  </div>
                  </div>
              </div>
              </div>
              </div>

              <div className='bg-[#F7F7F7] h-[269px] w-[360px]'>
                <img className='pl-16 pt-8' src={Meher} alt="" />
                <div className='flex justify-between mt-2'>
                <p className='font-josef text-[#151875] text-[16px] mt-3'>Comfort Handy Craft</p>
                <div className='flex gap-2'>
                <p className='font-josef text-[#151875] text-[14px] mt-3'>$42.00</p>
                <del  className='font-josef text-primary text-[14px] mt-3'>$65.00</del>
                </div>
                </div>
              </div>

            </div>

        </div>
    </section>
      
    </>
  )
}

export default Leatest
