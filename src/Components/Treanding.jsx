import React from 'react'
import treand from '../assets/treand.png'
import treanding from '../assets/treanding.png'
import treans from '../assets/treans.png'
import trea from '../assets/trea.png'

const Treanding = () => {
  return (
    <>
     <section className='pt-12 pb-28 py-32 px-32'>
        <div className='container mx-auto'>
        <div className='text-center mb-16'>
                <h4 className='font-josef text-[42px]  font-[bold] text-[#1A0B5B]'>Treandings Products</h4>
            </div>

            <div  className='flex justify-between'>
              
              <div className='shadow-lg w-[23%] relative'>
                <img className='bg-[#F6F7FB] h-[270px] w-[100%]' src={treand} alt="" />
                <div className='h-[236]absolute text-center g-3 p-3'>
                  <p className='font-lato text-[18px] text-[#FB2E86]'>Cantilever chair</p>
                  <p className='font-josef text-[#151875] text-[14px]'>Code - Y523201</p>
                  <p className='font-josef text-[#151875] text-[14px]'>$42.00</p>
                </div> 
              </div>
              <div className='shadow-lg w-[23%] relative'>
                <img className='bg-[#F6F7FB] h-[270px] w-[100%]' src={treanding} alt="" />
                <div className='h-[236]absolute text-center g-3 p-3'>
                  <p className='font-lato text-[18px] text-[#FB2E86]'>Cantilever chair</p>
                  <p className='font-josef text-[#151875] text-[14px]'>Code - Y523201</p>
                  <p className='font-josef text-[#151875] text-[14px]'>$42.00</p>
                </div> 
              </div>
              <div className='shadow-lg w-[23%] relative'>
                <img className='bg-[#F6F7FB] h-[270px] w-[100%]' src={treans} alt="" />
                <div className='h-[236]absolute text-center g-3 p-3'>
                  <p className='font-lato text-[18px] text-[#FB2E86]'>Cantilever chair</p>
                  <p className='font-josef text-[#151875] text-[14px]'>Code - Y523201</p>
                  <p className='font-josef text-[#151875] text-[14px]'>$42.00</p>
                </div> 
              </div>
              <div className='shadow-lg w-[23%] relative'>
                <img className='bg-[#F6F7FB] h-[270px] w-[100%]' src={trea} alt="" />
                <div className='h-[236]absolute text-center g-3 p-3'>
                  <p className='font-lato text-[18px] text-[#FB2E86]'>Cantilever chair</p>
                  <p className='font-josef text-[#151875] text-[14px]'>Code - Y523201</p>
                  <p className='font-josef text-[#151875] text-[14px]'>$42.00</p>
                </div> 
              </div>
              



            </div>


     

        </div>
     </section>
      
    </>
  )
}

export default Treanding
