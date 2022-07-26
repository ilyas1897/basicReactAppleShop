import { useContext } from 'react';
import CartContext from '../../../store/CartContext';
// import FavoriteContext from '../../../store/FavotiteContext';
import Bookmark from '../../Cart/Bookmark';
import './HeaderCartBtn.scss';

const HeaderMarkBtn = (props) => {
  const favoriteCtx = useContext(CartContext);

  const numberOfFavoriteItems = favoriteCtx.itemsFavorite.reduce((curNumber, item) => {
    return curNumber + 1;
  }, 0);
  return (
    <button className="cart" onClick={props.onClick}>
      <span className="cart__icon">
        <Bookmark />
      </span>
      <span className="cart__count">{numberOfFavoriteItems}</span>
    </button>
  );
};

export default HeaderMarkBtn;
