import React from 'react'
import Reusable from '../Components/Reusable'
import Picture from '../Components/Picture'
import Blog1 from '../Components/Blog1'
import Blog2 from '../Components/Blog2'



const Blog = () => {
  return (
    <>
   
    <Reusable title='Blog Page' titlename= ' . Blog Page' />
    <div className='flex gap-5'>
    <Blog1/>
      <Blog2/>
    </div>
    <Picture/>
  
    </>
  )
}

export default Blog
