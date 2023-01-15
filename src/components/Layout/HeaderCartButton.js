import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CartIcon from '../Cart/CartIcon';

import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [cartIsHighlighted, setCartIsHighlighted] = useState(false);
  const { items } = useSelector(state => state.cartContents);

  const btnClasses = `${styles.button} ${cartIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setCartIsHighlighted(true);

    const timer = setTimeout(() => {
      setCartIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
