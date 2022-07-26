import React from 'react';
import './Button.scss';

const Button = (props) => {
  return <button className="button__cart">{props.children}</button>;
};

export default Button;
