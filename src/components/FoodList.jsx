import React, { useMemo } from 'react'
import FoodItem from './FoodItem'
import { useSelector } from 'react-redux'

export default function FoodList({foodList}) {
    const currentCategory = useSelector(state => state.category.category)

    const sortedList = useMemo(() => {
        if (currentCategory !== 0) {
            return foodList.filter(product => product.category === currentCategory)
        } else return foodList
    }, [currentCategory, foodList])
    console.log(sortedList);
  return (
    <div className='list-wrapper'>
        {sortedList.map((foodItem) => <FoodItem {...foodItem} key={foodItem.id}/>)}
    </div>
  )
}
