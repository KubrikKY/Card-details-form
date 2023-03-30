import React from 'react';
import classes from './Card.module.scss';

import CardBack from './CardBack';
import CardFront from './CardFront';

function Card({ placeholder }) {
  return (
    <div className={classes.SideCard}>
      <div className={classes.Card}>
        <CardFront placeholder={placeholder} />
        <CardBack placeholder={placeholder} />
      </div>
    </div>
  );
}

export default Card;
