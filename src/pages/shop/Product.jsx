import React from 'react'
import './shop.css'

const Product = (props) => {
    const  {id, price, productName, productImage} = props.data;
  return (
    <div className='product'>
      <img src={productImage} alt='product Iamge'/>
      <div className='description'>
        <p>
            <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default Product
