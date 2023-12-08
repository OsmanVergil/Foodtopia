import React from 'react'
import '../styles/categories.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../store/reducers/categorySlice'

export default function Categories() {
    const categories = ['Все', 'Салаты', 'Супы', 'Горячие блюда', 'Гарниры', 'Десерты']

    const currentCategory = useSelector(state => state.category.category)
    const dispatch = useDispatch()

  return (
    <div className='categories-wrapper'>
        {categories.map((category, ind) => 
        <button 
        className={currentCategory === ind ? 'category active' : 'category'}
        onClick={() => dispatch(changeCategory(ind))}>
            {category}
        </button>)}
    </div>
  )
}
