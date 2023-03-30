import React from 'react';
import classes from './FormElem.module.scss';
import { useDispatch } from 'react-redux';
import { changeNameAction } from '../../../state/reducer/reducerCard';

import { useSelector } from 'react-redux';
function InputName({ placeholder }) {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.card.name);

  const changeName = (value) => {
    dispatch(changeNameAction(value));
  };
  return (
    <label>
      <p>Cardholder Name</p>

      <input
        onChange={(e) => changeName(e.target.value)}
        placeholder={placeholder}
        value={name}
      />
    </label>
  );
}

export default InputName;
