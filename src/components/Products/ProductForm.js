import React, { useRef, useState } from 'react';
import ButtonCount from '../UI/ButtonCount';
import Input from '../UI/Input';
import Plus from '../UI/Plus';
import './ProductForm.scss';

const ProductForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className="product-form" onClick={onSubmitForm}>
      <div className="product-form__count">
        <Input
          ref={amountInputRef}
          input={{
            id: 'amount',
            min: 1,
            max: 99,
            step: 1,
            defaultValue: 1,
          }}
        />
      </div>
      <ButtonCount>
        <Plus>Add</Plus>
      </ButtonCount>

      {!amountIsValid && <p>Please enter a valid amount </p>}
    </form>
  );
};

export default ProductForm;
