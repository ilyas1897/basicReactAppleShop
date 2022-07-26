import React, { Fragment } from 'react';
import './Banner.scss';
import iphone from '../../../assets/image/banner.png';

const Banner = (props) => {
  return (
    <Fragment>
      <div className="banner">
        <div className="banner__text">
          <p>
            Accessories for <br />
            Iphone 13 Pro Max
          </p>
        </div>
        <div className="banner__img">
          <img className="banner__image" src={iphone} alt="banner" />
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
