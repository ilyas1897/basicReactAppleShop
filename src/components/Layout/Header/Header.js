import React, { Fragment } from 'react';
import './Header.scss';
import HeaderCartBtn from './HeaderCartBtn';
import HeaderMarkBtn from './HeaderMarkBtn';
import Logo from '../../UI/Logo';

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <div className="header__top">
          <div className="header__logo">
            <a href="/">
              <Logo />
            </a>
            <div className="header__left">
              <select className="header__select">
                <option className="header__option">Select phone model</option>
                <option className="header__option">Apple</option>
              </select>
            </div>
          </div>
          <div className="header__right">
            <HeaderCartBtn onClick={props.onShowCart} />
            <HeaderMarkBtn onClick={props.onShowFavorite} />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
