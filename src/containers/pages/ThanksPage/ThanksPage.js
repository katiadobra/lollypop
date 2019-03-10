import React from 'react';
import './ThanksPage.scss';

const thanksPage = props => {
  return (
    <div className="thank-you">
      <section className="page-info">
        <h1 className="thank-you__ttl">Спасибо за заказ!</h1>
        <p>
          Мы свяжемся с Вами по почте или по указанному номеру телефона для
          уточнения деталей заказа и, после оплаты, доставим посылку в ближайшее
          время.
        </p>
        <a className="btn btn--secondary" href="/">
          Вернуться к покупкам
        </a>
      </section>
    </div>
  );
};

export default thanksPage;
