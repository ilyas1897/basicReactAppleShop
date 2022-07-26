import React, { useState } from 'react';
import Header from './components/Layout/Header/Header';
import './App.css';
import ProductSummary from './components/Products/ProductsSummary';
import Footer from './components/Layout/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Favorite from './components/Favorites/Favorite';
// import FavoriteProvider from './store/FavoriteProvider';

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const [favoriteIsShow, setFavoriteIsShow] = useState(false);

  const showFavoriteHandler = () => {
    setFavoriteIsShow(true);
  };

  const hideFavoriteHandler = () => {
    setFavoriteIsShow(false);
  };

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onCloseCart={hideCartHandler} />}
      {favoriteIsShow && <Favorite onCloseFavorite={hideFavoriteHandler} />}
      <div className="container">
        <Header onShowCart={showCartHandler} onShowFavorite={showFavoriteHandler} />
        <main>
          <ProductSummary />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
