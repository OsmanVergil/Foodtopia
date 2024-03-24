import React, { useMemo } from 'react';
import FoodItem from '../../entities/FoodItem/ui/FoodItem';
import { useAppSelector } from '../../shared/store/hooks';
import { foodItem } from '../../App/types/types';

interface foodListProps {
  foodList: foodItem[];
}

export default function FoodList({ foodList }: foodListProps) {
  const currentCategory = useAppSelector((state) => state.category.category);

  const sortedList = useMemo(() => {
    if (currentCategory !== 0) {
      return foodList.filter((product) => product.category === currentCategory);
    } else return foodList;
  }, [currentCategory, foodList]);

  return (
    <div className="list-wrapper">
      {sortedList.map((foodItem) => (
        <FoodItem {...foodItem} key={foodItem.id} />
      ))}
    </div>
  );
}
