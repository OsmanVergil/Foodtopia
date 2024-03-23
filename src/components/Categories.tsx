import React from 'react'
import '../styles/categories.css'
import { changeCategory } from '../store/reducers/categorySlice.ts'
import { useAppDispatch, useAppSelector } from '../store/hooks.ts'

export default function Categories() {
    const categories = ['Все', 'Салаты', 'Супы', 'Горячие блюда', 'Гарниры', 'Десерты']

    const currentCategory = useAppSelector(state => state.category.category)
    const dispatch = useAppDispatch()

  return (
    <div className='categories-wrapper'>
        {categories.map((category, ind) => 
        <button 
          key={category}
          className={currentCategory === ind ? 'category active' : 'category'}
          onClick={() => dispatch(changeCategory(ind))}>
            {category}
        </button>)}
    </div>
  )
}
