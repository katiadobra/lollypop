import React from 'react';
import './CheckoutSummary.scss';

const checkoutSummary = props => {
  const { checkoutCancelled, checkoutContinued } = props;

  return (
    <div>
      <h1>Надеемся вам нравится</h1>
      <button className="btn btn--delete" onClick={checkoutCancelled}>
        Cancel
      </button>
      <button className="order_btn" onClick={checkoutContinued}>
        Continue
      </button>
    </div>
  );
};

export default checkoutSummary;
