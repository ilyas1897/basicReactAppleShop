import React from 'react';

const CartContext = React.createContext({
  items: [],
  itemsFavorite: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  addFavoriteItem: () => {},
  removeFavoriteItem: () => {},
});

export default CartContext;
