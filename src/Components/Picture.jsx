import React from 'react'
import picture from '../assets/picture.png'

const Picture = () => {
  return (
    <>
      <section className='py-32 px-32'>
        <div className='container mx-auto ml-20 '>
            <img src={picture} alt="" />
        </div>
      </section>
    </>
  )
}

export default Picture
