import React from 'react'
import { CiSearch } from "react-icons/ci";
import siam from '../assets/siam.png'
import sia from '../assets/sia.png'
import si from '../assets/si.png'
import s from '../assets/s.png'
import Araf from '../assets/Araf.png'
import Ara from '../assets/Ara.png'
import Ar from '../assets/Ar.png'
import Fardin from '../assets/Fardin.png'
import Fardi from '../assets/Fardi.png'
import Fard from '../assets/Fard.png'
import Fa from '../assets/Fa.png'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Blog2 = () => {
  return (
    <>
     <section>
        <div className="container mt-24">

            <h4 className='text-[22px] text-[#151875] font-josef'>Search</h4>
             <div className="h-[40px] w-[270px] border-2 items-center justify-center flex gap-10 mt-4">
                <input type="text" placeholder='Search For Posts' />
                 <CiSearch className='text-[25px] text-[#CBCBE0]' />                      
        </div>
        <h4 className='text-[22px] text-[#151875] font-josef mt-7'>Categories</h4>

        <div className='mt-5 flex gap-4'>
            <button className='h-[30px] w-[122px] bg-primary font-josef text-[14px] text-[white]'>
            Hobbies (14)
            </button>
            <p className=' font-josef text-[14px] text-[#3F509E] mt-2'>Women (21)</p>    
        </div>

        <div className='flex gap-16 mt-5'>
        <p className=' font-josef text-[14px] text-[#3F509E]'>Women (21)</p>
        <p className=' font-josef text-[14px] text-[#3F509E]'>Women (21)</p>
        </div>

        <div className='flex gap-16 mt-5'>
        <p className=' font-josef text-[14px] text-[#3F509E]'>Women (21)</p>
        <p className=' font-josef text-[14px] text-[#3F509E]'>Women (21)</p>
        </div>

        <h4 className='text-[22px] text-[#151875] font-josef mt-7'>Recent Post</h4>


        <div className='flex gap-3 mt-5'>
            <img src={siam} alt="" />
            <div>
            <p className=' font-josef text-[14px] text-[#3F509E] mt-2'>It is a long established fact</p>
            <p className=' font-josef text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
            
            </div>
        </div>
        <div className='flex gap-3 mt-5'>
            <img src={sia} alt="" />
            <div>
            <p className=' font-josef text-[14px] text-[#3F509E] mt-2'>It is a long established fact</p>
            <p className=' font-josef text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
            
            </div>
        </div>
        <div className='flex gap-3 mt-5'>
            <img src={si} alt="" />
            <div>
            <p className=' font-josef text-[14px] text-[#3F509E] mt-2'>It is a long established fact</p>
            <p className=' font-josef text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
            
            </div>
        </div>
        <div className='flex gap-3 mt-5'>
            <img src={s} alt="" />
            <div>
            <p className=' font-josef text-[14px] text-[#3F509E] mt-2'>It is a long established fact</p>
            <p className=' font-josef text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
            
            </div>
        </div>

        <h4 className='text-[22px] text-[#151875] font-josef mt-7'>Sale Product</h4>

        <div className='flex gap-3 mt-5'>
            <img src={Araf} alt="" />
            <div>
            <p className=' font-josef text-[14px] text-[#3F509E] mt-2'>Elit ornare in enim mauris.</p>
            <p className=' font-josef text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
            
            </div>
        </div>

        <div className='flex gap-3 mt-5'>
            <img src={Ara} alt="" />
            <div>
            <p className=' font-josef text-[14px] text-[#3F509E] mt-2'>Viverra pulvinar et enim.</p>
            <p className=' font-josef text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
            
            </div>
        </div>
        <div className='flex gap-3 mt-5'>
            <img src={Ar} alt="" />
            <div>
            <p className=' font-josef text-[14px] text-[#3F509E] mt-2'>Mattis varius donec fdsfd</p>
            <p className=' font-josef text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
            
            </div>
        </div>

        <h4 className='text-[22px] text-[#151875] font-josef mt-7'>Offer product</h4>
           

           <div className='mt-5 flex gap-3'>
            <div className=''>
                <img src={Fa} alt="" />
                <p className=' font-lato text-[14px] text-[#3F509E] mt-1 pl-5'>Duis lectus est.</p>
                <p className=' font-lato text-[12px] text-[#8A8FB9] pl-5'>$12.00 - $15.00</p>
            </div>
            <div className=''>
                <img src={Fard} alt="" />
                <p className=' font-lato text-[14px] text-[#3F509E] mt-1 pl-5'>Sed placerat.</p>
                <p className=' font-lato text-[12px] text-[#8A8FB9] pl-5'>$12.00 - $15.00</p>
            </div>
            
           </div>

           <div className='mt-5 flex gap-3'>
            <div className=''>
                <img src={Fardi} alt="" />
                <p className=' font-lato text-[14px] text-[#3F509E] mt-1 pl-5'>Netus proin.</p>
                <p className=' font-lato text-[12px] text-[#8A8FB9] pl-5'>$12.00 - $15.00</p>
            </div>
            <div className=''>
                <img src={Fardin} alt="" />
                <p className=' font-lato text-[14px] text-[#3F509E] mt-1 pl-5'>Platea in.</p>
                <p className=' font-lato text-[12px] text-[#8A8FB9] pl-5'>$12.00 - $15.00</p>
            </div>
            
           </div>

           <h4 className='text-[22px] text-[#151875] font-josef mt-7'>Follow</h4>
             
             <div className='flex text-[#FFFFFF] gap-3 mt-5 '>
                           <div className='bg-[#5625DF] w-5 h-5 flex justify-center items-center rounded-full'>
                             <FaFacebookF className='' />
                           </div>
                           <div className='bg-[#FF27B7] w-5 h-5 flex justify-center items-center rounded-full'>
                             <AiFillInstagram className=' ' />
                           </div>
                           <div className='bg-[#37DAF3] w-5 h-5 flex justify-center items-center rounded-full'>
                             <FaTwitter className='' />
                           </div>
                         </div>

                         <h4 className='text-[22px] text-[#151875] font-josef mt-7'>Tags</h4>

                         <div className='flex gap-8'>
                         <p className=' font-lato text-[16px] text-[#3F509E] mt-1 underline'>General</p>
                         <p className=' font-lato text-[16px] text-primary mt-1 underline'>Atsanil</p>
                         <p className=' font-lato text-[16px] text-[#3F509E] mt-1 underline'>Insas.</p>
                         </div>

                         <div className='flex gap-8'>
                         <p className=' font-lato text-[16px] text-[#3F509E] mt-1 underline'>Bibsaas</p>
                         <p className=' font-lato text-[16px] text-[#3F509E] mt-1 underline'>Nulla.</p>
                         </div>
           
        </div>
     </section>
    </>
  )
}

export default Blog2
