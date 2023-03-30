import React from 'react';

import { useDispatch } from 'react-redux';
import { changeCVCAction } from '../../../state/reducer/reducerCard';
import classes from './FormElem.module.scss';

import { useSelector } from 'react-redux';
function InputYear({ placeholder }) {
  const dispatch = useDispatch();
  const CVC = useSelector((state) => state.card.CVC);

  const onInputValid = (input) => {
    if (isValid(input.value)) {
      input.style.borderColor = 'green';
    } else {
      input.style.borderColor = 'red';
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
        required
      />
    </label>
  );
}

export default InputYear;
