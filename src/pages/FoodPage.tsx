import React, { useEffect, useState } from 'react';
import '../styles/foodPage.css';
import foodService from '../API/foodService.ts';
import Categories from '../components/Categories.tsx';
import FoodList from '../components/FoodList.tsx';
import { foodItem } from '../types';

export default function FoodPage() {
  const [foodList, setFoodList] = useState<foodItem[]>([]);

  const fetchFood = async () => {
    const response = await foodService.getAll();
    if (response) {
      setFoodList(response);
    }
  };

  useEffect(() => {
    console.log('FPSDFOPKSDPO');
    fetchFood();
    console.log('22222222FPSDFOPKSDPO');
  }, []);

  return (
    <div className="foodPage-wrapper">
      <Categories />

      <FoodList foodList={foodList} />
    </div>
  );
}
