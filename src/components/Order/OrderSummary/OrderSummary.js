import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './OrderSummary.scss';

const OrderSummaryItem = props => {
  let OrderSummaryItem = props.item;

  return (
    <div className="summary-item">
      <div className="summary-item__img">
        <img src={OrderSummaryItem.src} alt="" />
      </div>

      <div className="summary-item__info">
        <div className="summary-item__ttl">
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
      </div>
    </div>
  );
};

class OrderSummary extends Component {
  render() {
    const { data, price, packaging, purchaseContinued } = this.props;
    let dataCopied = data.filter(item => item.qty !== 0);

    return (
      <Aux>
        <div className="cart-previw">
          <div className="cart-previw__block">
            {data &&
              dataCopied.map((item, id) => {
                return <OrderSummaryItem key={id} item={item} />;
              })}
          </div>
          <div className="cart-previw__block">
            <div className="final-price">
              <div className="final-price__row">
                <b>Цена товаров:</b>
                <div>
                  {price.toFixed(2)} грн.
                </div>
              </div>
              <div className="final-price__row">
                <b>Доставка:</b>
                <div>Free</div>
              </div>
              <div className="final-price__row">
                <b>Упаковка:</b>
                <div>
                  {packaging.toFixed(2)} грн.
                </div>
              </div>
            </div>
            <div className="final-price">
              <div className="final-price__row">
                <b>Всего:</b>
                <b>
                  {(price + packaging).toFixed(2)} грн.
                </b>
              </div>
            </div>
            <button className="btn btn--secondary" onClick={purchaseContinued}>
              Оформить заказ
            </button>
          </div>
        </div>
      </Aux>
    );
  }
}

export default OrderSummary;
