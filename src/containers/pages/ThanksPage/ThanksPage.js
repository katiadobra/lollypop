import React from 'react';
import './ThanksPage.scss';

const thanksPage = props => {
  return (
    <div className="thank_you">
      <h1 className="thank_you__caption">Спасибо за заказ!</h1>
      <p>Мы доставим вашу посылку в ближайшее время.</p>
      <button
        className="thank_you__btn order_btn"
        onClick={() => props.reload()}
      >
        Вернуться к покупкам
      </button>
    </div>
  );
};

export default thanksPage;
