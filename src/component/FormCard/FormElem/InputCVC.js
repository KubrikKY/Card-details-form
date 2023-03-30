import React from 'react';

import { useDispatch } from 'react-redux';
import { changeCVCAction } from '../../../state/reducer/reducerCard';
import classes from './FormElem.module.scss';

import { useSelector } from 'react-redux';
function InputYear({ placeholder }) {
  const dispatch = useDispatch();
  const CVC = useSelector((state) => state.card.CVC);

  const changeCVC = (value) => {
    dispatch(changeCVCAction(value));
  };
  return (
    <label>
      <p>CVC</p>

      <input
        onChange={(e) => changeCVC(e.target.value)}
        placeholder={placeholder}
        type="number"
        value={CVC}
      />
    </label>
  );
}

export default InputYear;
