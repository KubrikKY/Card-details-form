import React from 'react';
import classes from './FormElem.module.scss';

import { useDispatch } from 'react-redux';
import { changeYearAction } from '../../../state/reducer/reducerCard';

import { useSelector } from 'react-redux';
function InputYear({ placeholder }) {
  const dispatch = useDispatch();
  const year = useSelector((state) => state.card.year);
  const yearNow = +String(new Date().getFullYear()).slice(2);

  const onInputValid = (input) => {
    if (isValid(input.value)) {
      input.style.borderColor = 'green';
    } else {
      input.style.borderColor = 'red';
    }
  };

  const isValid = (value) => {
    return yearNow <= value && yearNow + 20 > value;
  };

  const changeYear = (input) => {
    if (
      isFinite(input.value) &&
      String(input.value).length <= 2 &&
      input.value < yearNow + 20
    ) {
      onInputValid(input);
      dispatch(changeYearAction(input.value));
    }
  };
  return (
    <input
      onChange={(e) => changeYear(e.target)}
      placeholder={placeholder}
      type="text"
      value={year}
      required
    />
  );
}

export default InputYear;
