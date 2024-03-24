import MyButton from '../../../shared/UI/button/MyButton';
import './foodItem.css';
import { Link } from 'react-router-dom';
import { foodItem } from '../../../App/types/types';
import { addProduct } from '../../../shared/store/reducers/cartSlice';
import { useAppDispatch } from '../../../shared/store/hooks';

export default function FoodItem({ id, imageUrl, title, price }: foodItem) {
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(
      addProduct({
        id,
        title,
        imageUrl,
        price,
        qty: 1,
      }),
    );
  };
  const redirectAddress = '/foodItem/' + id;

  return (
    <div className="wrapper">
      <img className="photo" src={imageUrl} alt={title} />
      <div>
        <Link to={redirectAddress} className="title">
          <p>{title}</p>
        </Link>

        <div className="priceAndAdd">
          <p>{price}р</p>

          <MyButton onClick={addToCart}>Добавить</MyButton>
        </div>
      </div>
    </div>
  );
}
