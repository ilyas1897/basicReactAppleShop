import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';
// import FavoriteContext from '../../store/FavotiteContext';
import Delete from '../UI/Delete';
import ModalFavorite from '../UI/Modal';
import './Favorite.scss';
import FavoriteItem from './FavoriteItem';

const Favorite = (props) => {
  const favoriteCtx = useContext(CartContext);

  const favoriteItemAddHandler = (item) => {
    favoriteCtx.addFavoriteItem({ ...item });
  };

  const favoriteItemRemoveHandler = (id) => {
    favoriteCtx.removeFavoriteItem(id);
  };

  const favoriteItem = (
    <div>
      {favoriteCtx.itemsFavorite.map((item) => (
        <FavoriteItem
          key={item.id}
          id={item.id}
          name={item.name}
          discount={item.discount}
          price={item.price}
          image={item.image}
          rating={item.rating}
          onRemove={favoriteItemRemoveHandler.bind(null, item.id)}
          onAdd={favoriteItemAddHandler.bind(null, item)}
        />
      ))}
    </div>
  );

  return (
    <ModalFavorite onCloseFavorite={props.onCloseFavorite}>
      <div className="favorite">
        <div className="favorite__delete" onClick={props.onCloseFavorite}>
          <Delete />
        </div>
        <div>
          <h2 className="favorite__title">Favorite</h2>
          <div className="favorite__items">
            <div className="favorite__content">
              <div className="favorite__left">
                <div className="favorite__item">{favoriteItem}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalFavorite>
  );
};

export default Favorite;
