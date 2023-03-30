import React, { useState } from 'react';
import InputName from './FormElem/InputName';
import InputNumber from './FormElem/InputNumber';
import InputCVC from './FormElem/InputCVC';

import classes from './FormCard.module.scss';
import InputDate from './FormElem/InputDate';

function FormCard({ placeholder, onSubmit }) {
  return (
    <div className={classes.FormPlace}>
      <form className={classes.FormCard} onSubmit={onSubmit}>
        <InputName placeholder={placeholder.name} />
        <InputNumber placeholder={placeholder.numberCard} />
        <div className={classes.FormData}>
          <InputDate
            placeholder={{ month: placeholder.month, year: placeholder.year }}
          />
          <InputCVC placeholder={placeholder.CVC} />
        </div>
        <input type="submit" value="Confirm" />
      </form>
    </div>
  );
}

export default FormCard;
