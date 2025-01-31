import React from 'react'
import Group from '../assets/Group.png'
import { GoDotFill } from "react-icons/go";


const Unique = () => {
  return (
    <>
    <section className='bg-[#F1F0FF] h-[579px]'>
        <div className="container mx-auto flex justify-center py-4">
             
             <div className=" h-[550px] w-[1050px]  flex">
              <div className="  w-[540px] h-[550px]">
                <img src={Group} alt="" />
              </div>
              <div className=" h-[550px] ml-5">
                <h2 className=' text-[35px] font-bold font-josef text-secondery mt-12'>Unique Features Of leatest &
                Trending Poducts</h2>
                <div className=" flex items-center mt-4 ">  
                  <GoDotFill className='text-primary'/><p className='text-[16px] text-[#ACABC3] font-lato mt-5 '>All frames constructed with 
                hardwood solids and laminates</p></div>
              
               <div className=" flex items-center ">
               <GoDotFill className='text-[blue]'/>
               <p className='text-[16px] text-[#ACABC3] font-lato mt-5'>Reinforced with double wood dowels, glue,
                   screw - nails corner 
                 blocks and machine nails</p>
               </div>
                 
                 <div className=" flex items-center">
                 <GoDotFill className='text-[#2BF5CC]'/>
                 <p className='text-[16px] text-[#ACABC3] font-lato mt-5'>Arms, backs and seats are structurally
                 reinforced</p>
                
                 </div>

                   <div className="flex mt-10">
                <div className="">
                  <button className='h-12 w-32 bg-primary text-white'>Add To cart</button>
                </div>
                <div className="ml-5">
                  <p className='text-secondery font-lato'>B&B Italian Sofa</p>
                  <p className='text-secondery font-lato'>$32.00</p>
                </div>
              </div>
              </div>
             
             </div>

        </div>
    </section>
      
    </>
  )
}

export default Unique
