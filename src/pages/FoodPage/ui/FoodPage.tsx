import { useEffect, useState } from 'react';
import './foodPage.css';
import foodService from '../../../shared/API/foodService';
import Categories from '../../../entities/Categories/ui/Categories';
import FoodList from '../../../widgets/FoodList/FoodList';
import { foodItem } from '../../../App/types/types';

export default function FoodPage() {
  const [foodList, setFoodList] = useState<foodItem[]>([]);

  const fetchFood = async () => {
    const response = await foodService.getAll();
    if (response) {
      setFoodList(response);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <div className="foodPage-wrapper">
      <Categories />

      <FoodList foodList={foodList} />
    </div>
  );
}
