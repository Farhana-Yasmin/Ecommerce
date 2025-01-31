import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Products2 = () => {
  return (
    <>
      <section className='bg-[#F9F8FE] h-[649px] mt-24 px-44'>
        <div className="container mx-auto pl-32 ">
          <div className='flex gap-10  '>
          <p className='font-josef text-[#0D134E] text-[24px] mt-24 underline'>Description</p>
          <p className='font-josef text-[#0D134E] text-[24px] mt-24'>Additional Info</p>
          <p className='font-josef text-[#0D134E] text-[24px] mt-24'>Reviews</p>
          <p className='font-josef text-[#0D134E] text-[24px] mt-24'>Video</p>
          </div>
           
        <div>
        <h3 className='font-josef text-[#0D134E] text-[24px] mt-12'>Varius tempor.</h3>
          <p className='font-josef text-[#A9ACC6] text-[16px] mt-2'>Aliquam dis vulputate vulputate integer sagittis.
             Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum.
             Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat
              laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, 
              quis diam arcu, nulla lobortis justo netus dis.
             Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        </div>

        <div>
        <h3 className='font-josef text-[#0D134E] text-[24px] mt-10'>More details</h3>
         <div className='flex gap-2'>
         <FaArrowRight className='mt-2' />
          <p className='font-josef text-[#A9ACC6] text-[16px] mt-2'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla .</p>
         </div>
         <div className='flex gap-2'>
         <FaArrowRight className='mt-2 text-[#2F1AC4]' />
          <p className='font-josef text-[#A9ACC6] text-[16px] mt-2'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla .</p>
         </div>
         <div className='flex gap-2'>
         <FaArrowRight className='mt-2' />
          <p className='font-josef text-[#A9ACC6] text-[16px] mt-2'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla .</p>
         </div>
         <div className='flex gap-2'>
         <FaArrowRight className='mt-2' />
          <p className='font-josef text-[#A9ACC6] text-[16px] mt-2'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla .</p>
         </div>

        </div>
        

        </div>
      </section>
    </>
  )
}

export default Products2
