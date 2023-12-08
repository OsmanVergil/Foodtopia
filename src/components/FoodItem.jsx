import React from 'react'
import MyButton from './UI/button/MyButton'
import '../styles/foodItem.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/reducers/cartSlice'

export default function FoodItem({id, imageUrl, title, price}) {
    const dispatch = useDispatch()  
    
    const addToCart = () => {
        dispatch(addProduct({
            id,
            title,
            imageUrl,
            price,
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
