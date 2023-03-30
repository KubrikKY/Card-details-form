import React from 'react';
import classes from './FormElem.module.scss';

import { useDispatch } from 'react-redux';
import { changeNumberAction } from '../../../state/reducer/reducerCard';

import { useSelector } from 'react-redux';
function InputName({ placeholder }) {
  const dispatch = useDispatch();
  const numberCard = useSelector((state) => state.card.numberCard);

  const onInputValid = (input) => {
    if (isValid(input.value)) {
      input.style.borderColor = 'green';
    } else {
      input.style.borderColor = 'red';
    }
  };

  const isValid = (value) => {
    return value.length === 20;
  };

  const changeNumber = (input) => {
    onInputValid(input);
    if (
      input.value.length < 20 &&
      isFinite(input.value.replace(/ /g, '')) &&
      !input.value.includes('.')
    ) {
      const cardNumber = input.value
        .split(/(\d{4})/)
        .filter((item) => item !== '')
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();

      dispatch(changeNumberAction(cardNumber));
    }
  };
  return (
    <label>
      <p>Card Number</p>
      <input
        onChange={(e) => changeNumber(e.target)}
        placeholder={placeholder}
        type="text"
        value={numberCard}
        required
      />
    </label>
  );
}

export default InputName;
