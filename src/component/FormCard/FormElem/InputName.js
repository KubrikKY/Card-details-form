import React from 'react';
import classes from './FormElem.module.scss';
import { useDispatch } from 'react-redux';
import { changeNameAction } from '../../../state/reducer/reducerCard';

import { useSelector } from 'react-redux';
function InputName({ placeholder }) {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.card.name);

  const onInputValid = (input) => {
    if (isValid(input.value)) {
      input.style.borderColor = 'green';
    } else {
      input.style.borderColor = 'red';
    }
  };

  const isValid = (value) => {
    return /^[a-z ,.'-]{2,20}$/i.test(value);
  };

  const changeName = (input) => {
    onInputValid(input);
    dispatch(changeNameAction(input.value));
  };
  return (
    <label>
      <p>Cardholder Name</p>

      <input
        onChange={(e) => changeName(e.target)}
        placeholder={placeholder}
        value={name}
        required
      />
    </label>
  );
}

export default InputName;
