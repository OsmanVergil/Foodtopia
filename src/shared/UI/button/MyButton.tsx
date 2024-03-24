import { PropsWithChildren } from 'react';
import './myButton.css';

type myButtonProps = {
  onClick?: () => void
}

const MyButton = (props: PropsWithChildren<myButtonProps>) => {
  return (
    <button id="myBtn" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default MyButton