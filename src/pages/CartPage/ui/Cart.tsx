import './cart.css';
import CartItem from '../../../entities/CartItem/ui/CartItem';
import MyButton from '../../../shared/UI/button/MyButton';
import { removeAll } from '../../../shared/store/reducers/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../shared/store/hooks';

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.products);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  const clearCart = () => {
    dispatch(removeAll());
    console.log(totalPrice);
  };

  return (
    <div className="cart-wrapper">
      {cartItems.map((product) => (
        <CartItem {...product} key={product.id} />
      ))}
      {totalPrice ? (
        <div className="final-section">
          <div className="removeBtn" onClick={clearCart}>
            Очистить корзину
          </div>
          <div className="checkout">
            <div className="total-price">
              <span>Итого: </span>

              <span>{totalPrice}р</span>
            </div>

            <MyButton>Оплатить</MyButton>
          </div>
        </div>
      ) : (
        <h1 className="empty-cart-message">Корзина пуста</h1>
      )}
    </div>
  );
}
