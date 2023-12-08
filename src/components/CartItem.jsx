import React from 'react'
import '../styles/cartItem.css'
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../store/reducers/cartSlice';

export default function CartItem({id, title, imageUrl, price, qty}) {
  const dispatch = useDispatch()  
    
    const addToCart = () => {
        dispatch(addProduct({
            id,
            title,
            imageUrl,
            price,
        }))
    }

    const removeFromCart = () => {
      dispatch(removeProduct({
          id,
          title,
          imageUrl,
          price,
      }))
  }


  return (
    <div className='cart-item'>
        <img className='cart-photo' src={imageUrl} alt={title} />

        <h3 className='cart-item-title'>{title}</h3>
        <div className='cart-btnsAndPrice'>
          <div className='cart-btns'>
            <button id='cart-button' onClick={addToCart}>
              +
            </button>
            <button id='cart-button' onClick={removeFromCart}>
              -
            </button>
          </div>
  
          <div className='cart-price'>{price * qty}р</div>
        </div>
    </div>
  )
}
