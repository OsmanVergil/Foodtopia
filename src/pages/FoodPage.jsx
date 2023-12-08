import React, { useEffect, useState } from 'react'
import '../styles/foodPage.css'
import foodService from '../API/foodService'
import Categories from '../components/Categories'
import FoodList from '../components/FoodList'

export default function FoodPage() {
  const [foodList, setFoodList] = useState([])

  const fetchFood = async () => {
    const response = await foodService.getAll()
    setFoodList(response)
  }

  useEffect(() => {
    fetchFood()
  }, [])

  return (
    <div className='foodPage-wrapper'>
        <Categories/>

        <FoodList foodList={foodList}/>
    </div>
  )
}
