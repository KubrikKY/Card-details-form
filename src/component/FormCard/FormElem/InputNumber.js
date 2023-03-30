import React from 'react';
import classes from './FormElem.module.scss';

import { useDispatch } from 'react-redux';
import {
  changeNumberAction,
  setValidAction,
  notValidAction,
} from '../../../state/reducer/reducerCard';

import { useSelector } from 'react-redux';
function InputNumber({ placeholder }) {
  const dispatch = useDispatch();
  const [numberCard, valid] = useSelector((state) => [
    state.card.numberCard,
    state.card.validate.numberCard,
  ]);

  const onInputValid = (input) => {
    if (isValid(input.value)) {
      input.style.borderColor = '#432257';
      dispatch(setValidAction('numberCard'));
    } else {
      input.style.borderColor = 'red';
      dispatch(notValidAction('numberCard'));
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
      />
      {!valid && <span className={classes.noValid}>Can't be blank</span>}
    </label>
  );
}

export default InputNumber;
