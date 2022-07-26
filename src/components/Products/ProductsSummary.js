import React, { Fragment } from 'react';
import Banner from '../Layout/Banner/Banner';
import Products from './Products';
import './ProductsSummary.scss';

const ProductSummary = (props) => {
  return (
    <Fragment>
      <Banner />
      <Products />
    </Fragment>
  );
};

export default ProductSummary;
