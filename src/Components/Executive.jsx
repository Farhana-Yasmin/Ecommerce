import React from 'react'
import products from '../assets/products.png'
import product from '../assets/product.png'
import chair from '../assets/chair.png'
import chai from '../assets/chai.png'
import cha from '../assets/cha.png'

const Executive = () => {
  return (
    <>
    <section>
        <div className='container px-32 flex justify-between gap-3'>
            <div className='bg-[#FFF6FB] h-[270px] w-[420px] pl-5 pt-5'>
                <h3 className='font-bold text-[#151875] font-josef text-[26px]'>23% off in all products</h3>
                <h5 className='text-[#FB2E86]'>shop Now</h5>
                <img src={products} alt="" />
            </div>
            <div className='bg-[#EEEFFB] h-[270px] w-[420px] pl-5 pt-5'>
                <h3 className='font-bold text-[#151875] font-josef text-[26px]'>23% off in all products</h3>
                <h5 className='text-[#FB2E86]'>View Collection</h5>
                <img className='h-[173px] w-[312px]' src={product} alt="" />
            </div>
            <div className='gap-3'>
                <div className='flex '>
                   <img className='bg-[#F5F6F8]' src={chair} alt="" />
                    <div className='pl-2'>
                    <p>Executive Seat chair</p>
                    <p>$32.00</p>
                    </div>
                </div>
                <div className='flex pt-6  '>
                   <img className='bg-[#F5F6F8] ' src={chai} alt="" />
                    <div className='pl-2'>
                    <p>Executive Seat chair</p>
                    <p>$32.00</p>
                    </div>
                </div>
                <div className='flex pt-6 '>
                   <img className='bg-[#F5F6F8]' src={cha} alt="" />
                    <div className='pl-2'>
                    <p>Executive Seat chair</p>
                    <p>$32.00</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      
    </>
  )
}

export default Executive
