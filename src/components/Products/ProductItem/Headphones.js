import React, { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import ProductFormFavorite from '../ProductFormFavorite';
import ProductForm from '../ProductForm';

const Headphones = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      image: props.image,
      name: props.name,
      amount: amount,
      discount: props.discount,
    });
  };

  const AddToFavoriteHandler = (amount) => {
    cartCtx.addFavoriteItem({
      id: props.id,
      image: props.image,
      name: props.name,
      discount: props.discount,
      amount: amount,
    });
  };

  return (
    <li key={props.id}>
      <div className="product-card headphones">
        <div className="product-card__favorites">
          <ProductFormFavorite onAddToFavorite={AddToFavoriteHandler} />
        </div>
        <div className="product-card__img">
          <img className="headphones__image " src={props.image} alt="product" />
        </div>
        <div className="product-card__box">
          <div className="product-card__name">{props.name}</div>
          <div className="product-card__price">
            <div className="product-card__new">${props.discount}</div>
            <div className="product-card__old">${props.price}</div>
          </div>
        </div>
        <div className="product-card__rating">{props.rating}</div>
        <ProductForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Headphones;
