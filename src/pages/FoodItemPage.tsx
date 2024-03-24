import React, { useEffect, useState } from 'react'
import foodService, { notFoundState } from '../API/foodService'
import { useLocation } from 'react-router-dom';
import '../styles/foodItemPage.css'
import MyButton from '../components/UI/button/MyButton';
import { addProduct } from '../store/reducers/cartSlice';
import { useAppDispatch } from '../store/hooks';
import { foodItem } from '../types';



export default function FoodItemPage() {
  const location = useLocation().pathname;
  const id = location.slice(10);


  const [product, setProduct] = useState<foodItem>(notFoundState)

  const fetchProduct = async () => {
    const response = await foodService.getById(id)
    setProduct(response)
  }

  useEffect(() => {
    fetchProduct()
  }, []) 

  const dispatch = useAppDispatch()  
    
    const addToCart = () => {
        dispatch(addProduct({
            id: Number(id),
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            qty: 1,
        }))
    }

  return (
    <div className='foodItemPage-wrapper'>
      <img className='big-photo' src={product.fullImageUrl} alt={product.title}/>

      <div className='food-info'>
        <div className='food-title'>
          {product.title}
        </div>

        <div className='food-desc'>
          {product.description}
        </div>

        
        <div className='macros'>
          <span>
            Вес: {product.nutrition.weight}г.
          </span>
          <span> 
            Энерг. ценность: {product.nutrition.ccals}ккал | {product.nutrition.protein}б | {product.nutrition.fats}ж | {product.nutrition.carbs}у
          </span>      
        </div>

        <div className='priceAndCart'>
          <span>
            Цена: {product.price}р
          </span>

          <MyButton onClick={addToCart}>
            В корзину
          </MyButton>
        </div>
      </div>
    </div>
  )
}
