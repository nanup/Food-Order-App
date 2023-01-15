import { useDispatch, useSelector } from 'react-redux';

import { cartVisibilityActions } from "../src/store/cartVisiblity-slice";

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const cartIsShown = useSelector(state => state.cartVisibility.isVisible);
  const dispatchFn = useDispatch();

  const showCartHandler = () => {
    dispatchFn(cartVisibilityActions.showCart());
  };

  const hideCartHandler = () => {
    dispatchFn(cartVisibilityActions.hideCart());
  };

  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
