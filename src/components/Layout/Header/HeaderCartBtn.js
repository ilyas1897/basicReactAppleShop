import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../store/CartContext';
import CartIcon from '../../Cart/CartIcon';
import './HeaderCartBtn.scss';
import classes from './HeaderCartBtn.module.css';
const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [btnIsHighlited, setBtnIsHighlited] = useState(false);

  const btnClasses = `${classes.cart} ${btnIsHighlited ? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlited(true);

    const timer = setTimeout(() => {
      setBtnIsHighlited(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.count}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
