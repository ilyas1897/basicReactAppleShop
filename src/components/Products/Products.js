import React from 'react';
import './Products.scss';
import p1 from '../../assets/image/products/p1.png';
import p2 from '../../assets/image/products/p2.png';
import p3 from '../../assets/image/products/p3.png';
import h1 from '../../assets/image/products/h1.png';
import h2 from '../../assets/image/products/h2.png';
import h3 from '../../assets/image/products/h3.png';
import h4 from '../../assets/image/products/h4.png';
import h5 from '../../assets/image/products/h5.png';
import h6 from '../../assets/image/products/h6.png';
import w1 from '../../assets/image/products/w1.png';
import w2 from '../../assets/image/products/w2.png';
import w3 from '../../assets/image/products/w3.png';
import ProductItemHeadphones from './ProductItem/ProductItemHeadphones';
import Headphones from './ProductItem/Headphones';
import Cases from './ProductItem/Cases';

const CASES = [
  {
    id: 'p1',
    name: 'Glass',
    image: p1,
    price: 5,
    discount: 4,
    rating: '4.4',
  },
  {
    id: 'p2',
    name: 'Silicone',
    image: p2,
    price: 5,
    discount: 4,
    rating: '4.6',
  },
  {
    id: 'p3',
    name: 'Leather',
    image: p3,
    price: 5,
    discount: 4,
    rating: '4.9',
  },
];

const HEADPHONES = [
  {
    id: 'h1',
    name: 'Apple BYZ S852I',
    price: 8,
    discount: 7,
    rating: '4.7',
    image: h1,
  },
  {
    id: 'h2',
    name: 'Apple EarPods',
    discount: 8,
    price: 9,
    rating: '4.7',
    image: h2,
  },
  {
    id: 'h3',
    name: 'Apple EarPods',
    price: 7,
    discount: 5,
    rating: '4.5',
    image: h3,
  },
  {
    id: 'h4',
    name: 'Apple BYZ S852I',
    price: 8,
    discount: 7,
    percent: '-20%',
    rating: '4.7',
    image: h4,
  },
  {
    id: 'h5',
    name: 'Apple EarPods',
    price: 7,
    discount: 5,
    rating: '4.5',
    image: h5,
  },
  {
    id: 'h6',
    name: 'Apple EarPods',
    price: 6,
    discount: 5,
    rating: '4.5',
    image: h6,
  },
];

const WIRELESSHEADPHONES = [
  {
    id: 'w1',
    name: 'Apple AirPods',
    discount: 20,
    rating: '4.7',
    image: w1,
  },
  {
    id: 'w2',
    name: 'GERLAX GH-04',
    discount: 14,
    rating: '4.7',
    image: w2,
  },
  {
    id: 'w3',
    name: 'BOROFONE BO4',
    discount: 16,
    rating: '4.7',
    image: w3,
  },
];

const cases = CASES.map((cases) => (
  <Cases
    key={cases.id}
    id={cases.id}
    name={cases.name}
    discount={cases.discount}
    image={cases.image}
    price={cases.price}
    rating={cases.rating}
  />
));

const headphones = HEADPHONES.map((headphone) => (
  <Headphones
    key={headphone.id}
    id={headphone.id}
    name={headphone.name}
    discount={headphone.discount}
    rating={headphone.rating}
    image={headphone.image}
    price={headphone.price}
  />
));

const wirelessHeadphonesList = WIRELESSHEADPHONES.map((wirelessHeadphone) => (
  <ProductItemHeadphones
    key={wirelessHeadphone.id}
    id={wirelessHeadphone.id}
    name={wirelessHeadphone.name}
    discount={wirelessHeadphone.discount}
    rating={wirelessHeadphone.rating}
    image={wirelessHeadphone.image}
    price={wirelessHeadphone.price}
  />
));

const Products = (props) => {
  return (
    <section className="products">
      <h2 className="products__title">Cases</h2>
      <ul className="products__items">{cases}</ul>
      <h2 className="products__title">Headphones</h2>
      <ul className="products__items">{headphones}</ul>
      <h2 className="products__title">Wireless Headphones</h2>
      <ul className="products__items">{wirelessHeadphonesList}</ul>
    </section>
  );
};

export default Products;
