import React from 'react'
import Reusable from '../Components/Reusable'
import Picture from '../Components/Picture'
import Products1 from '../Components/Products1'
import Products2 from '../Components/Products2'
import Products3 from '../Components/Products3'

const Products = () => {
  return (
    <>
    
      <Reusable title='Product Details' titlename= ' . Product Details'/>
      <Products1/>
      <Products2/>
      <Products3/>
      <Picture/>
      
    </>
  )
}

export default Products
