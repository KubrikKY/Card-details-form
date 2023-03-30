import React from 'react';
import classes from './FormElem.module.scss';

import { useDispatch } from 'react-redux';
import { changeYearAction } from '../../../state/reducer/reducerCard';

import { useSelector } from 'react-redux';
function InputYear({ placeholder }) {
  const dispatch = useDispatch();
  const year = useSelector((state) => state.card.year);

  const changeYear = (value) => {
    const yearNow = String(new Date().getFullYear()).slice(2);
    if (
      isFinite(value) &&
      String(value).length <= 2 &&
      value < +yearNow + 20 &&
      value > +yearNow - 20
    ) {
      dispatch(changeYearAction(Math.floor(value)));
    }
  };
  return (
    <input
      onChange={(e) => changeYear(e.target.value)}
      placeholder={placeholder}
      type="text"
      value={year}
    />
  );
}

export default InputYear;
