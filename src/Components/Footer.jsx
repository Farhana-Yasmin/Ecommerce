import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
    <footer className='bg-[#EEEFFB] mt-10'>
        <div className='container mx-auto pb-8  px-32 '>
            <div className='flex justify-between '>
                <div className="w-1/3">
        
                <div className='pb-11 pt-14'>
                  <img src={logo} alt="" />
                </div>
                <div className=' relative pb-5'>
                    <input className=' w-full h-12 pl-5 outline-none rounded-md bg-[#FFFFFF]' type="email" 
                       placeholder='Enter Email Address'
                       />
                    <button className=' h-12 w-32  bg-primary absolute top-0 right-0 rounded text-white font-lato'>Sign Up</button>
                   
                </div>

                <div>
                <p className='font-lato text-[16px] text-[#8A8FB9] pb-5 '>Contact Info</p>
                <p className='font-lato text-[16px] text-[#8A8FB9] pb-5'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
            </div>


            <div className='flex gap-8 mt-16'>
              <div>
                <h4 className='font-bold text-[22px] text-[#000000] font-josef'>Catagories</h4>
              <ul>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-8'>Laptops & Computers</li>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-4'>Cameras & Photography</li>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-4'>Smart Phones & Tablets</li>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-4'>Video Games & Consoles</li>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-4'>Waterproof Headphones</li>
              </ul>
              </div>
                 
                 <div>
                <h4 className='font-bold text-[22px] text-[#000000]  font-josef'>Customer Care</h4>
              <ul>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-8'>My Account</li>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-4'>Discount</li>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-4'>Returns</li>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-4'>Orders History</li>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-4'>Order Tracking</li>
                
              </ul>
                 </div>

                    <div>

                <h4 className='font-bold text-[22px] text-[#000000]  font-josef'>Pages</h4>
              <ul>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-8'>Blog</li>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-4'>Browse the Shop</li>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-4'>Category</li>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-4'>Pre-Built Pages</li>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-4'>Visual Composer Elements</li>
                <li className='font-lato text-[16px] text-[#8A8FB9] mt-4'>WooCommerce Pages</li>   
              </ul>
                    </div>
                       </div>
            </div>
        </div>
        

        <div className=' bg-[#E7E4F8] flex  text-center justify-between mx-auto px-52 pt-2'>
              <p className='font-lato text-[16px] text-[#9DA0AE]'>©Webecy - All Rights Reserved</p>


              <div className='flex text-[#FFFFFF] gap-3  '>
              <div className='bg-[#151875] w-5 h-5 flex justify-center items-center rounded-full'>
                <FaFacebookF className='' />
              </div>
              <div className='bg-[#151875] w-5 h-5 flex justify-center items-center rounded-full'>
                <AiFillInstagram className=' ' />
              </div>
              <div className='bg-[#151875] w-5 h-5 flex justify-center items-center rounded-full'>
                <FaTwitter className='' />
              </div>
            </div>
            </div>
    </footer>

   
      
    </>
  )
}

export default Footer

