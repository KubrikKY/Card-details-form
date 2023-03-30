import React from 'react';
import classes from './FormElem.module.scss';
import { useDispatch } from 'react-redux';
import {
  changeNameAction,
  setValidAction,
  notValidAction,
} from '../../../state/reducer/reducerCard';

import { useSelector } from 'react-redux';
function InputName({ placeholder }) {
  const dispatch = useDispatch();
  const [name, valid] = useSelector((state) => [
    state.card.name,
    state.card.validate.name,
  ]);

  const onInputValid = (input) => {
    if (isValid(input.value)) {
      input.style.borderColor = '#432257';
      dispatch(setValidAction('name'));
    } else {
      input.style.borderColor = 'red';
      dispatch(notValidAction('name'));
    }
  };

  const isValid = (value) => {
    return /^[a-z ,.'-]{2,20}$/i.test(value) && value.split(' ').length === 2;
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
      {!valid && <span className={classes.noValid}>Can't be blank</span>}
    </label>
  );
}

export default InputName;
