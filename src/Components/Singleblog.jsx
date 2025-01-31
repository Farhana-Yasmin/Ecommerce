import React from 'react'
import bruce from '../assets/bruce.png'
import Yasmin from '../assets/Yasmin.png'
import Yasm from '../assets/Yasm.png'
import Rikta from '../assets/Rikta.png'
import Rikt from '../assets/Rikt.png'
import Rik from '../assets/Rik.png'
import Ri from '../assets/Ri.png'
import { FaPenNib } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { RiStarSFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

const Singleblog = () => {
  return (
    <>
      <section className='px-24'>
        <div className='container mt-24'>
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
                 <p className='font-josef text-[#A9ACC6] text-[16px] mt-7'>Lorem ipsum dolor sit amet, adipiscing elit. 
                 Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum <br /> eu malesuada vitae ultrices in in neque,
                  porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                <p className='font-josef text-[#A9ACC6] text-[16px] mt-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere 
                 malesuada.Lorem ipsum dolor sit amet,</p>     
                        </div>
                                             
                 <div className='bg-[#FAFAFB] h-[141px] w-[867px] mt-14 '>
                           <div className='h-[88px] w-[832px]'>
                           < p className='font-josef text-[#A9ACC6] text-[18px] mt-12 pt-6 pl-8'> “Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Commodo dictum sapien, amet, 
                          consequat.Lorem ipsum dolor sit amet,         
                      consectetur adipiscing elit. Commodo dictum sapien, amet, consequattoamk risusu”</p>
                           </div>
                        </div>


                        <div className='mt-8'>
                          <div className='flex gap-5'>
                            <img src={Yasmin} alt="" />
                            <img src={Yasm} alt="" />
                          </div>

            
            
                         <p className='font-josef text-[#A9ACC6] text-[16px] mt-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea 
                           donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                            montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus.
                           Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet,</p>
                        </div>


      <div className='mt-12 flex gap-3'>
        <div>
          <div>
            <img src={Rikta} alt="" />
          </div>
          <p className='font-josef text-[#000000] text-[19px] mt-5'>Quam sed</p>
          <div className='flex gap-6'>
            <div className='flex gap-3'>
            <p  className='font-josef text-[#232A69] text-[13px] mt-3'>$32.00</p>
            <del className='font-josef text-primary text-[13px] mt-3'>$56.00</del>
            </div>
            <div className='flex mt-4'>
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#B2B2B2] text-[11px]' />
</div>
          </div>

        </div>
        <div>
          <div>
            <img src={Rikt} alt="" />
          </div>
          <p className='font-josef text-[#000000] text-[19px] mt-5'>Tristique sed</p>
          <div className='flex gap-6'>
            <div className='flex gap-3'>
            <p  className='font-josef text-[#232A69] text-[13px] mt-3'>$32.00</p>
            <del className='font-josef text-primary text-[13px] mt-3'>$56.00</del>
            </div>
            <div className='flex mt-4'>
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#B2B2B2] text-[11px]' />
</div>
          </div>

        </div>
        <div>
          <div>
            <img src={Rik} alt="" />
          </div>
          <p className='font-josef text-[#000000] text-[19px] mt-5'>A etiam</p>
          <div className='flex gap-6'>
            <div className='flex gap-3'>
            <p  className='font-josef text-[#232A69] text-[13px] mt-3'>$32.00</p>
            <del className='font-josef text-primary text-[13px] mt-3'>$56.00</del>
            </div>
            <div className='flex mt-4'>
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#B2B2B2] text-[11px]' />
</div>
          </div>

        </div>
        <div>
          <div>
            <img src={Ri} alt="" />
          </div>
          <p className='font-josef text-[#000000] text-[19px] mt-5'>Mi nisi</p>
          <div className='flex gap-6'>
            <div className='flex gap-3'>
            <p  className='font-josef text-[#232A69] text-[13px] mt-3'>$32.00</p>
            <del className='font-josef text-primary text-[13px] mt-3'>$56.00</del>
            </div>
            <div className='flex mt-4'>
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#FFC416] text-[11px]' />
<RiStarSFill className='text-[#B2B2B2] text-[11px]' />
</div>
          </div>

        </div>
      </div>

        <p className='text-[16px] font-lato text-[#8A8FB9] mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>

        <p className='text-[16px] font-lato text-[#8A8FB9] mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
           <hr className='mt-11' />
        <div className='flex text-[#FFFFFF] gap-3 mt-11 justify-center items-center '>
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

         <div className='h-[45] w-[882px] mt-5 bg-[#F7F8FB] flex justify-between'>
            <div className='flex items-center pl-8 pt-3 pb-3'>
            <IoIosArrowRoundBack className=' text-[#8A8FB9]'/>
            <p className='text-[16px] font-lato text-[#8A8FB9]'>Previous Post</p>
            </div>
            <div className='flex items-center pr-8'>
            <IoIosArrowRoundBack className=' text-[#8A8FB9]'/>
            <p className='text-[16px] font-lato text-[#8A8FB9]'>Next Post</p>
            </div>
         </div>


       

        </div>
      </section>
    </>
  )
}

export default Singleblog


