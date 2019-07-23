import React from 'react';
import './CheckoutSummary.scss';

const checkoutSummary = props => {
  const { checkoutCancelled, checkoutContinued } = props;

  return (
    <section className="checkout-summary">
      <h1 className="page-title">Надеемся вам нравится</h1>

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
    </section>
  );
};

export default checkoutSummary;
