import React from 'react';

import { useDispatch } from 'react-redux';
import { changeMonthAction } from '../../../state/reducer/reducerCard';
import classes from './FormElem.module.scss';

import { useSelector } from 'react-redux';
function InputMonth({ placeholder }) {
  const dispatch = useDispatch();
  const month = useSelector((state) => state.card.month);

  const changeMonth = (value) => {
    if (isFinite(value) && !value.includes('.')) {
      dispatch(changeMonthAction(value));
    }
  };
  return (
    <input
      onChange={(e) => changeMonth(e.target.value)}
      placeholder={placeholder}
      type="number"
      value={month}
    />
  );
}

export default InputMonth;
