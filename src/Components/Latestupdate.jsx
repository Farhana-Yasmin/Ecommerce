import React from 'react'
import Rectangle from '../assets/Rectangle.png'

const Latestupdate = () => {
  return (
    <>

    <section className='h-[460px] w-[100%] mt-32' style={{backgroundImage:` url(${Rectangle})`}}>
        <div className='container mx-auto flex items-center justify-center'>
        <div className=" mt-32">
                <h3 className=' font-josef text-secondery text-[35px]'>Get Leatest Update By Subscribe</h3>
                <h3 className=' font-josef text-secondery text-[35px] ml-32 mt-2'>0ur Newslater</h3>
                <button className=' bg-primary text-white py-3 px-10 ml-40 mt-10'>Shop Now</button>
            </div>            
        </div>
           
        
    </section>
      
    </>
  )
}

export default Latestupdate
