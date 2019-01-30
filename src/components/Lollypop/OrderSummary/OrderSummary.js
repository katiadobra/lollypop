import React from 'react';
import Aux from '../../../hoc/Aux';
import './OrderSummery.scss';

const OrderSummaryItem = props => {
  let OrderSummaryItem = props.item1;

  return (
    <div className="cart-item cart_item">
      <img src={OrderSummaryItem.src} alt="" />
      <span className="cart-item__info">
        <div className="cart-item__ttl">
          {OrderSummaryItem.name} x {OrderSummaryItem.qty}
        </div>
        <div>
          Цена: {OrderSummaryItem.cost} грн.
        </div>
        <div>
          Всего: {(OrderSummaryItem.cost * OrderSummaryItem.qty).toFixed(
            2
          )}{' '}
          грн.
        </div>
      </span>
    </div>
  );
};

const orderSummary = props => {
  const { data, total, packaging, showPopup } = props;
  return (
    <Aux>
      <div className="order">
        <div className="cart">
          <h1>Корзина</h1>
          <div className="cart_left">
            {data.map((item1, id1) => {
              return (
                <div key={id1}>
                  {item1.qty !== 0 && <OrderSummaryItem item1={item1} />}
                </div>
              );
            })}
          </div>
        </div>
        <div className="cart_right">
          <div className="final_price">
            <div className="cart_item">
              <h3>Цена товаров:</h3>
              <h3>
                {total.toFixed(2)} грн.
              </h3>
            </div>
            <div className="cart_item">
              <h3>Доставка:</h3>
              <h3>Free</h3>
            </div>
            <div className="cart_item">
              <h3>Упаковка:</h3>
              <h3>
                {packaging.toFixed(2)} грн.
              </h3>
            </div>
          </div>
          <div className="final_price">
            <h3>Общая стоимость:</h3>
            <h3>
              {(total + packaging).toFixed(2)} грн.
            </h3>
          </div>

          <button className="order_btn" onClick={showPopup}>
            Заказать сейчас
          </button>
        </div>
      </div>
    </Aux>
  );
};

export default orderSummary;
