import React from 'react';
import FavoriteIcon from '../UI/FavoriteIcon';

import './ProductForm.scss';

const ProductFormFavorite = (props) => {
  const onSubmitForm = (e) => {
    e.preventDefault();

    props.onAddToFavorite();
  };

  return (
    <form className="product-form" onClick={onSubmitForm}>
      <FavoriteIcon />
    </form>
  );
};

export default ProductFormFavorite;
