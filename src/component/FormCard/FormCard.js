import React from 'react';
import InputName from './FormElem/InputName';
import InputNumber from './FormElem/InputNumber';
import InputCVC from './FormElem/InputCVC';

import classes from './FormCard.module.scss';
import InputDate from './FormElem/InputDate';

function FormCard({ placeholder }) {
  return (
    <div className={classes.FormPlace}>
      <form className={classes.FormCard}>
        <InputName placeholder={placeholder.name} />
        <InputNumber placeholder={placeholder.numberCard} />
        <div className={classes.FormData}>
          <InputDate
            placeholder={{ month: placeholder.month, year: placeholder.year }}
          />
          <InputCVC placeholder={placeholder.CVC} />
        </div>
      </form>
    </div>
  );
}

export default FormCard;
