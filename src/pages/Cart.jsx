import React from 'react'
import '../styles/cart.css'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import MyButton from '../components/UI/button/MyButton'
import { removeAll } from '../store/reducers/cartSlice'

export default function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.products)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  
  const clearCart = () => {
    dispatch(removeAll())
    console.log(totalPrice);
  }

  return (
    <div className='cart-wrapper'>
      {cartItems.map(product => <CartItem {...product} key={product.id}/>)}
      {totalPrice 
      ? <div className='final-section'>
          <div className='removeBtn' onClick={clearCart}>
            Очистить корзину
          </div>
          <div className='checkout'>
            <div className='total-price'>
              <span>Итого: </span>

              <span>{totalPrice}р</span>
            </div>

            <MyButton>
              Оплатить
            </MyButton>
          </div>
        </div>
      : <h1 className='empty-cart-message'>Корзина пуста</h1>}
    </div>
  )
}
