import React from 'react';
import FavoriteIconSelected from '../UI/FavoriteIconSelected';

import './FavoriteItem.scss';

const FavoriteItem = (props) => {
  const discount = `$${props.discount}`;

  return (
    <div className="favorite-item" key={props.id}>
      <div className="favorite-item__action">
        <button className="favorite-item__delete" onClick={props.onRemove}>
          <FavoriteIconSelected />
        </button>
      </div>
      <div className="favorite-item__block">
        <div className="favorite-item__left">
          <div className="favorite-item__img">
            <img className="favorite-item__image" src={props.image} alt="product" />
          </div>
        </div>
        <div className="favorite-item__right">
          <div className="favorite-item__title">{props.name}</div>
          <div className="favorite-item__discount">{discount}</div>
        </div>
        <div className="favorite-item__rating">{props.rating}</div>
        <div className="favorite-item__price">{props.price}</div>
      </div>
    </div>
  );
};

export default FavoriteItem;
