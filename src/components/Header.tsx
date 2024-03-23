import React from 'react'
import cartIcon from '../icons/shopping-cart-svgrepo-com.svg'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/hooks.ts'

export default function Header() {
  const totalPrice = useAppSelector(state => state.cart.totalPrice)

  return (
    <div className='header'>
        <Link to='/' className='header-title'>
            <div>Foodtopia</div>
        </Link>

        <div className='right-header-section'>
          <div className='cart-section'>
            <Link to='/cart'>
                <img className='cart-icon' src={cartIcon} alt='иконка корзины'/>

                <span>
                  {totalPrice}р
                </span>
            </Link>
          </div>
          

          <span>
            Режим для слабовидящих
          </span>
          <input className='colorblind-mode' type="checkbox" value='colorblind'/>
        </div>
        
    </div>
  )
}
