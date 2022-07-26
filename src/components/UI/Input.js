import React from 'react';
import './Input.scss';

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      {/* <label htmlFor={props.input.id}>{props.label}</label> */}
      <input className="input" {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
