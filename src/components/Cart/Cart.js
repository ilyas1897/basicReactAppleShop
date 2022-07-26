import React, { useContext } from 'react';
import './Cart.scss';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import Delete from '../UI/Delete';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';
import CartIcon from '../UI/CartIcon';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItem = (
    <div>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          discount={item.discount}
          price={item.price}
          image={item.image}
          rating={item.rating}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </div>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className="cart">
        <div className="cart__delete" onClick={props.onCloseCart}>
          <Delete />
        </div>
        {hasItems ? (
          <div>
            <h2 className="cart__title">Cart</h2>
            <div className="cart__items">
              <div className="cart__content">
                <div className="cart__left">
                  <div className="cart__item">{cartItem}</div>
                </div>
              </div>
              <div className="cart__order">
                <div className="cart__box">
                  <span>Total Amount</span>
                  <span>{totalAmount}</span>
                </div>
                {hasItems && (
                  <div className="cart__check">
                    <Button>Go to checkout</Button>
                  </div>
                )}
              </div>
            </div>
            <h3 className="cart__title">Delivery</h3>
            <div className="cart__map"></div>
          </div>
        ) : (
          <div className="cart__content">
            <div className="cart__img">
              <CartIcon />
            </div>
            <p className="cart__empty">Cart is empty</p>
            <div className="cart__fix">But it's never too late to fix it :)</div>
            <div className="cart__back">
              <Button>Back to product catalog</Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
