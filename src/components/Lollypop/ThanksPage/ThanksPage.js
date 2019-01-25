import React from 'react';

const thanksPage = props => {
  return (
    <div className="thank_you">
      <h1>thank you</h1>
      <p>We will deliver your package at your doorstep shortly.</p>
      <button className="order_btn" onClick={() => props.reload()}>
        Go Back to Shopping
      </button>
    </div>
  );
};

export default thanksPage;
