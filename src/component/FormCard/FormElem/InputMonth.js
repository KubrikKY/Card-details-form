import React from 'react';

import { useDispatch } from 'react-redux';
import { changeMonthAction } from '../../../state/reducer/reducerCard';
import classes from './FormElem.module.scss';

import { useSelector } from 'react-redux';
function InputMonth({ placeholder }) {
  const dispatch = useDispatch();
  const month = useSelector((state) => state.card.month);

  const onInputValid = (input) => {
    if (isValid(input.value)) {
      input.style.borderColor = 'green';
    } else {
      input.style.borderColor = 'red';
    }
  };

  const isValid = (value) => {
    return !!value;
  };

  const changeMonth = (input) => {
    if (
      isFinite(input.value) &&
      String(input.value).length <= 2 &&
      input.value >= 0 &&
      input.value <= 12
    ) {
      onInputValid(input);
      dispatch(changeMonthAction(input.value));
    }
  };
  return (
    <input
      onChange={(e) => changeMonth(e.target)}
      placeholder={placeholder}
      type="text"
      value={month}
      required
    />
  );
}

export default InputMonth;
