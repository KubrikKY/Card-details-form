import React from 'react';

import { useDispatch } from 'react-redux';
import {
  changeYearAction,
  setValidAction,
  notValidAction,
} from '../../../state/reducer/reducerCard';

import { useSelector } from 'react-redux';
function InputYear({ placeholder }) {
  const dispatch = useDispatch();
  const year = useSelector((state) => state.card.year);
  const yearNow = +String(new Date().getFullYear()).slice(2);

  const onInputValid = (input) => {
    if (isValid(input.value)) {
      input.style.borderColor = '#432257';
      dispatch(setValidAction('year'));
    } else {
      input.style.borderColor = 'red';
      dispatch(notValidAction('year'));
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
    />
  );
}

export default InputYear;
