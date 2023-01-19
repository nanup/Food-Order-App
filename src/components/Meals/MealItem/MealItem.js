import { useDispatch } from 'react-redux';

import { cartContentsActions } from "../../../store/cartContents-slice";

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const dispatchFn = useDispatch();

  const price = `₹${props.price}`;

  const addToCartHandler = amount => {
    dispatchFn(cartContentsActions.addItem(
      {
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      }
    ));
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
