import React from 'react'
import MyButton from './UI/button/MyButton.tsx'
import '../styles/foodItem.css'
import { Link } from 'react-router-dom'
import { addProduct } from '../store/reducers/cartSlice.ts'
import { useAppDispatch } from '../store/hooks.ts'
import { foodItem } from '../types'

export default function FoodItem({id, imageUrl, title, price} : foodItem) {
    const dispatch = useAppDispatch()  
    
    const addToCart = () => {
        dispatch(addProduct({
            id,
            title,
            imageUrl,
            price,
            qty: 1,
        }))
    }
    const redirectAddress = '/foodItem/' + id;

  return (
    <div className='wrapper'>
        <img className='photo' src={imageUrl} alt={title} />
        <div>
            <Link to={redirectAddress} className='title'>
                <p>{title}</p>
            </Link>
            

            <div className='priceAndAdd'>
                <p>{price}р</p>

                <MyButton onClick={() => addToCart()}>
                    Добавить
                </MyButton>
            </div>
        </div>
    </div>
  )
}
