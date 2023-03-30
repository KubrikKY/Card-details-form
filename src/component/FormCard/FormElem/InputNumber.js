import React from 'react';
import classes from './FormElem.module.scss';

import { useDispatch } from 'react-redux';
import { changeNumberAction } from '../../../state/reducer/reducerCard';

import { useSelector } from 'react-redux';
function InputName({ placeholder }) {
  const dispatch = useDispatch();
  const numberCard = useSelector((state) => state.card.numberCard);

  const changeNumber = (value) => {
    if (
      value.length < 20 &&
      isFinite(value.replace(/ /g, '')) &&
      !value.includes('.')
    ) {
      const cardNumber = value
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
        onChange={(e) => changeNumber(e.target.value)}
        placeholder={placeholder}
        type="text"
        value={numberCard}
      />
    </label>
  );
}

export default InputName;
