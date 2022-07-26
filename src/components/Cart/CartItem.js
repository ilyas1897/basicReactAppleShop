import React from 'react';

import './CartItem.scss';

const CartItem = (props) => {
  const discount = `$${props.discount}`;

  return (
    <div className="cart-item" key={props.id}>
      <div className="cart-item__block">
        <div className="cart-item__left">
          <div className="cart-item__img">
            <img className="cart-item__image" src={props.image} alt="product" />
          </div>
        </div>
        <div className="cart-item__right">
          <div className="cart-item__title">{props.name}</div>
          <div className="cart-item__discount">{discount}</div>
        </div>
      </div>
      <div className="cart-item__action">
        <button className="cart-item__count" onClick={props.onRemove}>
          <span>-</span>
        </button>
        <span className="cart-item__qtt">{props.amount}</span>

        <button className="cart-item__count" onClick={props.onAdd}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
