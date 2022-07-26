import React from 'react';
import './ButtonCount.scss';

const ButtonCount = (props) => {
  return <button className="button">{props.children}</button>;
};

export default ButtonCount;
