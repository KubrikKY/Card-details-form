import React from 'react';
import InputYear from './InputYear';
import InputMonth from './InputMonth';
import classes from './FormElem.module.scss';

function InputDate({ placeholder }) {
  return (
    <label>
      <p>Exp. Date (MM/YY)</p>
      <div className={classes.FormDateCard}>
        <InputMonth placeholder={placeholder.month} />
        <InputYear placeholder={placeholder.year} />
      </div>
    </label>
  );
}

export default InputDate;
