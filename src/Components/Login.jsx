
import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    
    <>
      <section>
      <div className="container mx-auto flex justify-center py-20">
        <div className=" flex justify-center items-center w-[544px] h-[474px] bg-[#FFFFFF] shadow-lg">
        <div className=" w-[433px] h-[390px]">
          <h2 className=' text-center text-[32px] font-josef font-bold'>Login</h2>
          <p className=' text-center text-[17px] text-[#9096B2] font-lato  '>Please login using account detail bellow.</p>
          <input type="email" id='email' placeholder='Email Address' className="border-2 outline-none w-[430px] text-[#9096B2] h-14 pl-4 py-4 mt-8"/>
          <input type="email" id='password' placeholder='Password' className="border-2 outline-none w-[430px] h-14 text-[#9096B2] pl-4 py-4 mt-5"/>
          <p className='text-[17px] text-[#9096B2] font-lato mt-4'>Forgot your password?</p>
          <button className=' mt-4 h-12 w-[430px] bg-primary text-white font-lato text-[17px] items-center justify-center rounded-[2px]'>Login</button>
          <p className=' mt-6 text-center text-[17px] text-[#9096B2] font-lato'>Don’t have an Account? <Link to={"/Registration"}><span className=' text-primary'>Create account</span></Link></p>
        </div>
        </div>
      </div>
      </section>
    </>
  )
}

  


export default Login
