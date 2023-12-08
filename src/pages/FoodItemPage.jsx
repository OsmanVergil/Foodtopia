import React, { useEffect, useState } from 'react'
import foodService from '../API/foodService'
import { useLocation } from 'react-router-dom';
import '../styles/foodItemPage.css'
import MyButton from '../components/UI/button/MyButton';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/reducers/cartSlice';

export default function FoodItemPage() {
  const location = useLocation().pathname;
  const id = location.slice(10);


  const [product, setProduct] = useState({nutrition: {}})

  const fetchProduct = async () => {
    const response = await foodService.getById(id)
    setProduct(response)
  }

  useEffect(() => {
    fetchProduct()
  }, []) 
  console.log(product);

  const dispatch = useDispatch()  
    
    const addToCart = () => {
        dispatch(addProduct({
            id,
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
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
