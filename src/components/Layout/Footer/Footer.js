import React, { Fragment } from 'react';
import Instagram from '../../UI/Instagram';
import Logo from '../../UI/Logo';
import Telegram from '../../UI/Telegram';
import Vkontakte from '../../UI/Vkontakte';
import WhatSapp from '../../UI/WhatSapp';
import World from '../../UI/World';

import './Footer.scss';

const Footer = (props) => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer__logo">
          <Logo />
        </div>
        <div className="footer__menu">
          <ul className="footer__item">
            <li className="footer__list">
              <a href="/">Favorites</a>
            </li>
            <li className="footer__list">
              <a href="/">Cart</a>
            </li>
            <li className="footer__list">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer__terms terms">
          <p className="terms__title">Terms of service</p>
          <div className="terms__box">
            <World />
            <div className="terms__lang">
              <p className="terms__lg">Eng</p>
              <p className="terms__lg">Fran</p>
              <p className="terms__lg">Ukr</p>
            </div>
          </div>
        </div>
        <div className="footer__social">
          <div className="footer__smedia">
            <a href="/">
              <Vkontakte />
            </a>
          </div>
          <div className="footer__smedia">
            <a href="/">
              <Instagram />
            </a>
          </div>
          <div className="footer__smedia">
            <a href="/">
              <Telegram />
            </a>
          </div>
          <div className="footer__smedia">
            <a href="/">
              <WhatSapp />
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
