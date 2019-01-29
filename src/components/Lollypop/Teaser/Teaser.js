import React from 'react';
import './Teaser.scss';

const teaser = props =>
  <div className="actionteaser">
    <span className="actionteaser__text">
      {props.children}
    </span>
    <span className="actionteaser__code">
      Добавь к заказу* : {props.code}
    </span>
  </div>;

export default teaser;
