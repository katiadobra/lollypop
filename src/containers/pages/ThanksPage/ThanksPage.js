import React from 'react';
import './ThanksPage.scss';

const thanksPage = props => {
  return (
    <div className="thank-you">
      <h1 className="thank-you__caption">Спасибо за заказ!</h1>
      <p>Мы доставим вашу посылку в ближайшее время.</p>
      <button className="btn btn--secondary" onClick={() => props.reload()}>
        Вернуться к покупкам
      </button>
    </div>
  );
};

export default thanksPage;
