import React from "react";

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>PlatePal</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='A colorful assortment of vegetables and meat on barbecue' />
      </div>
    </React.Fragment>
  );
};

export default Header;
