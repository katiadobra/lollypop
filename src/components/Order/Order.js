import React from 'react';
import './Order.scss';

const order = props =>
  <div className="order-it">
    <span>
      Заказ номер: {props.id}
    </span>
    <p>
      Количество товаров: {props.items}
    </p>
    <p>
      Цена: {props.price}
    </p>
  </div>;

export default order;
