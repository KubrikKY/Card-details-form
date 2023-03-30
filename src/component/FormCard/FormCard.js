import InputName from './FormElem/InputName';
import InputNumber from './FormElem/InputNumber';
import InputCVC from './FormElem/InputCVC';

import classes from './FormCard.module.scss';
import InputDate from './FormElem/InputDate';
import { useSelector } from 'react-redux';

function FormCard({ placeholder, onSubmit }) {
  const validations = useSelector((state) => state.card.validate);
  const inputsLength = useSelector(
    (state) => Object.keys(state.card).length - 1
  );
  const validationsInputs = Array.from(Object.values(validations));
  let Submit;
  let styleConfirm;

  if (
    !validations ||
    validationsInputs.includes(false) ||
    validationsInputs?.length !== inputsLength
  ) {
    Submit = (e) => e.preventDefault();
    styleConfirm = 'noActive';
  } else {
    Submit = onSubmit;
    styleConfirm = 'Active';
  }

  return (
    <div className={classes.FormPlace}>
      <form className={classes.FormCard} onSubmit={Submit}>
        <InputName placeholder={placeholder.name} />
        <InputNumber placeholder={placeholder.numberCard} />
        <div className={classes.FormData}>
          <InputDate
            placeholder={{ month: placeholder.month, year: placeholder.year }}
          />
          <InputCVC placeholder={placeholder.CVC} />
        </div>
        <input
          type="submit"
          value="Confirm"
          className={classes[styleConfirm]}
        />
      </form>
    </div>
  );
}

export default FormCard;
