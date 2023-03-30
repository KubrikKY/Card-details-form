import React from 'react';
import InputYear from './InputYear';
import InputMonth from './InputMonth';
import classes from './FormElem.module.scss';
import { useSelector } from 'react-redux';

function InputDate({ placeholder }) {
  const [validMonth, validYear] = useSelector((state) => [
    state.card.validate.month,
    state.card.validate.year,
  ]);
  const valid = validMonth && validYear;
  return (
    <label>
      <p>Exp. Date (MM/YY)</p>
      <div className={classes.FormDateCard}>
        <InputMonth placeholder={placeholder.month} />
        <InputYear placeholder={placeholder.year} />
      </div>
      {!valid && <span className={classes.noValid}>Can't be blank</span>}
    </label>
  );
}

export default InputDate;
