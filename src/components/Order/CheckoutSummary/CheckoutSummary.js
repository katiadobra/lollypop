import React from 'react';
import './CheckoutSummary.scss';

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

const checkoutSummary = props => {
  const { data, checkoutCancelled, checkoutContinued } = props;

  console.log('[CheckoutSummary]: data ', data);
  let dataCopied = data.filter(item => item.qty !== 0 || null);

  return (
    <section className="checkout-summary">
      <div className="checkout-summary__container">
        <h1 className="page-title">Надеемся вам нравится</h1>

        <div>
          {data &&
            dataCopied.map((item, id) => {
              return <OrderSummaryItem key={id} item={item} />;
            })}
        </div>

        <div className="checkout-summary__btns">
          <button
            className="btn btn--default"
            onClick={checkoutCancelled}
            aria-label="Go back"
          >
            Вернуться к покупкам
          </button>
          <button
            className="btn btn--secondary"
            onClick={checkoutContinued}
            aria-label="Fill out the information about Delivery"
          >
            Заполнить информацию о доставке
          </button>
        </div>
      </div>
    </section>
  );
};

export default checkoutSummary;
