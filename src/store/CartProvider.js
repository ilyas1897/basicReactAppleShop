import React, { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  itemsFavorite: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.discount * action.item.amount;

    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);

    const updatedImage = state.items.image;

    const existingItem = state.items[existingCartItemIndex];
    const updateTotalAmount = state.totalAmount - existingItem.discount;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
      image: updatedImage,
    };
  }
  return defaultCartState;
};

const favoriteReducer = (state, action) => {
  if (action.type === 'ADD_FAVORITE') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
    };
  }

  if (action.type === 'REMOVE_FAVORITE') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);

    const updatedImage = state.items.image;

    const existingItem = state.items[existingCartItemIndex];
    const updateTotalAmount = state.totalAmount - existingItem.discount;
    let updatedItems;
    if (existingItem) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
      image: updatedImage,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispathCartAction] = useReducer(cartReducer, defaultCartState);

  const [favoriteState, dispathFavoriteAction] = useReducer(favoriteReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispathCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispathCartAction({ type: 'REMOVE', id: id });
  };

  const addItemToFavoriteHandler = (item) => {
    dispathFavoriteAction({ type: 'ADD_FAVORITE', item: item });
  };

  const removeItemFromFavoriteHandler = (id) => {
    dispathFavoriteAction({ type: 'REMOVE_FAVORITE', id: id });
  };

  const cartContext = {
    price: favoriteState.price,
    items: cartState.items,
    itemsFavorite: favoriteState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    addFavoriteItem: addItemToFavoriteHandler,
    removeFavoriteItem: removeItemFromFavoriteHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
