import React, { useMemo } from 'react';
import FoodItem from './FoodItem';
import { useAppSelector } from '../store/hooks';
import { foodItem } from '../types';

interface foodListProps {
  foodList: foodItem[]
}

export default function FoodList({foodList} : foodListProps) {
  const currentCategory = useAppSelector((state) => state.category.category);
  console.log(Array.isArray(foodList));

  const sortedList = useMemo(() => {
    if (currentCategory !== 0) {
      return foodList.filter((product) => product.category === currentCategory);
    } else return foodList;
  }, [currentCategory, foodList]);

  console.log(sortedList);

  return (
    <div className="list-wrapper">
      {sortedList.map((foodItem) => (
        <FoodItem {...foodItem} key={foodItem.id} />
      ))}
    </div>
  );
}
