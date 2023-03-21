import React from 'react'
import Product from './Product.jsx'
import { PRODUCTS } from '../../products.js'
import './shop.css'

const Shop = () => {
    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1> Ivan GasShop</h1>
            </div>
            <div className='products'>
            {
                PRODUCTS.map((product) => 
                    <Product data={product}/>
            )}

            </div>
        </div>
    )
}

export default Shop
