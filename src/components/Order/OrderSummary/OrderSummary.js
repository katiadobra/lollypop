import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './OrderSummary.scss';

const OrderSummaryItem = props => {
  let OrderSummaryItem = props.item;

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

class OrderSummary extends Component {
  render() {
    const { data, price, packaging, purchaseContinued } = this.props;
    let dataCopied = data.filter(item => item.qty !== 0);

    return (
      <Aux>
        <div className="order">
          <div className="cart">
            <div className="cart_lef t">
              {data
                ? dataCopied.map((item, id) => {
                    return (
                      <div key={id}>
                        <OrderSummaryItem item={item} />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="cart_righ t">
            <div className="final_price">
              <div className="cart_item">
                <h3>Цена товаров:</h3>
                <h3>
                  {price.toFixed(2)} грн.
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
                {(price + packaging).toFixed(2)} грн.
              </h3>
            </div>
            <button className="order_btn" onClick={purchaseContinued}>
              К оплате
            </button>
          </div>
        </div>
      </Aux>
    );

    // console.log('props', props);
    // console.log('props.open', props.open);
    // console.log('props.price', props.price);
    // console.log('props.data', props.data);
    // let data = [];
    // if (props.data) {
    //   data = data.filter(item => item.qty !== 0);
    //   console.log('if orderSummary data', data);
  }
  // console.log('orderSummary data', data);
}

export default OrderSummary;
