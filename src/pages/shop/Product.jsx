import React, { useContext } from 'react';


import './shop.css'
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const context = useContext(ShopContext);
  const addToCart = context ? context.addToCart : null;
  const cartItems = context ? context.cartItems : {};
  const cartItemCount = cartItems[id];
  
  return (
    <div className="product">
      <img src={productImage} alt='productImage' />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      {addToCart && (
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      )}
    </div>
  );
};


export default Product
