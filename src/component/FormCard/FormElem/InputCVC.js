import React from 'react';

import { useDispatch } from 'react-redux';
import {
  changeCVCAction,
  setValidAction,
  notValidAction,
} from '../../../state/reducer/reducerCard';
import classes from './FormElem.module.scss';

import { useSelector } from 'react-redux';
function InputYear({ placeholder }) {
  const dispatch = useDispatch();
  const [CVC, valid] = useSelector((state) => [
    state.card.CVC,
    state.card.validate.CVC,
  ]);

  const onInputValid = (input) => {
    if (isValid(input.value)) {
      input.style.borderColor = '#432257';
      dispatch(setValidAction('CVC'));
    } else {
      input.style.borderColor = 'red';
      dispatch(notValidAction('CVC'));
    }
  };

  const isValid = (value) => {
    return value.length === 3;
  };

  const changeCVC = (input) => {
    if (input.value.length <= 3 && isFinite(input.value)) {
      onInputValid(input);

      dispatch(changeCVCAction(input.value));
    }
  };
  return (
    <label>
      <p>CVC</p>

      <input
        onChange={(e) => changeCVC(e.target)}
        placeholder={placeholder}
        type="text"
        value={CVC}
      />
      {!valid && <span className={classes.noValid}>Can't be blank</span>}
    </label>
  );
}

export default InputYear;
