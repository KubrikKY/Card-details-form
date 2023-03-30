import React from 'react';
import classes from './Card.module.scss';
import { useSelector } from 'react-redux';

function CardBack({ placeholder }) {
  const CVC = useSelector((state) => state.card.CVC);

  return (
    <div className={classes.CardBack}>
      <span>{CVC.length > 0 ? CVC : placeholder.CVC}</span>
    </div>
  );
}

export default CardBack;
