import React from 'react';
import classes from './Finish.module.scss';

function Finish(props) {
  return (
    <div className={classes.Finish}>
      <h1>Thank you!</h1>
      <p>We added your card details</p>
      <button onClick={() => props.continue(false)}>Continue</button>
    </div>
  );
}

export default Finish;
