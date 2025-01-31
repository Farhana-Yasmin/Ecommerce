import React from 'react'
import Singleblog from '../Components/Singleblog'
import Reusable from '../Components/Reusable'

import Blog2 from '../Components/Blog2'

const Contact = () => {
  return (
    <>

    
    <Reusable title='Single Blog' titlename= ' . Single Blog' />
    <div className='flex '>
    <Singleblog/>
    <Blog2/>
       
    </div>

      
    </>
  )
}

export default Contact
