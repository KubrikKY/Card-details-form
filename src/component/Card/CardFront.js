import React from 'react';
import classes from './Card.module.scss';
import { useSelector } from 'react-redux';

function CardFront({ placeholder }) {
  const [numberCard, name, month, year] = useSelector((state) => [
    state.card.numberCard,
    state.card.name,
    state.card.month,
    state.card.year,
  ]);

  return (
    <div className={classes.CardFront}>
      <span>{numberCard.length > 0 ? numberCard : placeholder.numberCard}</span>
      <div className={classes.CardNameData}>
        <span>{name.length > 0 ? name : placeholder.name}</span>
        <span>
          {month.length > 0 ? month : placeholder.month}/
          {year.length > 0 ? year : placeholder.year}
        </span>
      </div>
    </div>
  );
}

export default CardFront;
