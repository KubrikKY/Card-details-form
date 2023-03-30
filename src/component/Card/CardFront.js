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

  const monthCard = month.length > 1 ? month : '0' + month;

  const yearCard = year.length > 1 ? year : '0' + year;

  return (
    <div className={classes.CardFront}>
      <span>{numberCard.length > 0 ? numberCard : placeholder.numberCard}</span>
      <div className={classes.CardNameData}>
        <span>
          {name.length > 0
            ? name.toUpperCase()
            : placeholder.name.toUpperCase()}
        </span>
        <span>
          {month.length > 0 ? monthCard : placeholder.month}/
          {year.length > 0 ? yearCard : placeholder.year}
        </span>
      </div>
    </div>
  );
}

export default CardFront;
