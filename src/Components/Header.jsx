import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
 <header className='bg-[#7E33E0] text-white py-2'>
    <div className="container mx-auto">
    <div className="div flex justify-between">
    <div className="div flex items-center gap-5">
        <div className="div flex items-center gap-3">
        <MdOutlineEmail />
        <p>mhhasanul@gmail.com</p>
        </div>

        <div className="div flex items-center gap-3">
        <IoCallOutline />
        <p>(12345)67890</p>
        </div>
      </div>
      <div className="div">
        <ul className='flex items-center gap-3 font-josef'>
        <li className='flex items-center gap-3'>
        <select name="" id="" className='bg-transparent'>
            <option value=""className='bg-[#7E33E0]'>English <FaAngleDown/></option>
            <option value=""className='bg-[#7E33E0]'>Bangla <FaAngleDown/></option>
            <option value=""className='bg-[#7E33E0]'>Arabic<FaAngleDown/></option>
          </select>
        </li>
        <li className='flex items-center gap-3'>
          <select name="" id="" className='bg-transparent'>
            <option value=""className='bg-[#7E33E0]'>USD <FaAngleDown/></option>
            <option value=""className='bg-[#7E33E0]'>BDT <FaAngleDown/></option>
            <option value=""className='bg-[#7E33E0]'>Rial<FaAngleDown/></option>
          </select>
          </li>
        <li className='flex items-center gap-3'> <Link to = {'/MyAccount'}>Login</Link> 
          <FaRegUser /></li>
        <li className='flex items-center gap-3'>Wishlist <FaRegHeart /></li>
        <li className='flex items-center gap-3' ><CiShoppingCart /></li>
        </ul>
      
      </div>
    </div>
    </div>
 </header>
  )
}

export default Header

