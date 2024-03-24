import './cartItem.css';
import { cartItem } from '../../../App/types/types';
import { addProduct, removeProduct } from '../../../shared/store/reducers/cartSlice';
import { useAppDispatch } from '../../../shared/store/hooks';

export default function CartItem({id, imageUrl, title, price, qty}: cartItem) {
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(
      addProduct({
        id,
        title,
        imageUrl,
        price,
        qty,
      }),
    );
  };

  const removeFromCart = () => {
    dispatch(
      removeProduct({
        id,
        title,
        imageUrl,
        price,
        qty,
      }),
    );
  };

  return (
    <div className="cart-item">
      <img className="cart-photo" src={imageUrl} alt={title} />

      <h3 className="cart-item-title">{title}</h3>
      <div className="cart-btnsAndPrice">
        <div className="cart-btns">
          <button id="cart-button" onClick={addToCart}>
            +
          </button>
          <button id="cart-button" onClick={removeFromCart}>
            -
          </button>
        </div>

        <div className="cart-price">{price * qty}р</div>
      </div>
    </div>
  );
}
