import React from 'react'
import cartIcon from '../icons/shopping-cart-svgrepo-com.svg'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const totalPrice = useSelector(state => state.cart.totalPrice)

  return (
    <div className='header'>
        <Link to='/' className='header-title'>
            <div>Foodtopia</div>
        </Link>

        <div className='right-header-section'>
          <div className='cart-section'>
            <Link to='/cart'>
                <img className='cart-icon' src={cartIcon} alt='иконка корзины'/>
            </Link>

            <span>
              {totalPrice}р
            </span>
          </div>
          

          <span>
            Режим для слабовидящих
          </span>
          <input className='colorblind-mode' type="checkbox" value='colorblind'/>
        </div>
        
    </div>
  )
}
