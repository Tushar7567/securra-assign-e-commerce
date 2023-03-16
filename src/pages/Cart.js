import React from 'react'
import { useSelector } from "react-redux";
import NavigationAd from '../components/NavigationAd';


const Cart = () => {

  const cart = useSelector((state) => state.cart);


  return (
    <div className='cart-container'>
    <NavigationAd />
    <div className='cart-wrapper'>
      <h1>YOUR BAG</h1>
      <div>
        <div className='cart-products-wrapper'>
          {cart.products.map((product,index) => (
            <div className='cart-products' key={index} >
              <div>
                <img src={product.images.medium.url} />
                <div className='details'>
                  <span>
                    <b>Product:</b> {product.title}
                  </span>
                  <p>
                    <b>Description: </b>{product.description}
                  </p>
                </div>
              </div>
              <div className='price-details'>
                <div className='price-wrapper'>
                  <b>Quantity: </b>
                  <span>{product.quantity}</span>
                </div>
                <div>
                  <b>Price: </b>
                  Rs. {product.price * product.quantity}
                </div>
              </div>
            </div>
          ))}
          <hr />
        </div>
        <div className='total-price'>
          <h1>ORDER SUMMARY</h1>
          <div className='total'>
            <span><b> {`Total:  `}</b> </span>
            <span>Rs. {cart.total}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cart
