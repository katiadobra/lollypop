import React from 'react';
import './Impressum.scss';

const impressum = () => {
  return (
    <section className="impressum">
      <h1 className="page-title">Контакты</h1>
      <div className="impressum__btn-wrap">
        <a
          className="btn btn--secondary btn--small"
          href="mailto:lolly.pp.ua@gmail.com"
          role="button"
          aria-label="Contact us with email"
        >
          Написать нам
        </a>
      </div>

      <p>
        <strong>ПРИЁМ ОНЛАЙН-ЗАКАЗОВ:</strong>
        <br /> ежедневно с 11.00 до 20.00
      </p>
      <p>
        Email:
        <a
          href="mailto:lolly.pp.ua@gmail.com"
          role="button"
          aria-label="Contact us with email"
        >
          lolly.pp.ua@gmail.com
        </a>
      </p>

      <p>
        Instagram:
        <a
          href="https://www.instagram.com/lolly.pp.ua/"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label="Go to our Instagram page"
        >
          instagram.com/lolly.pp.ua
        </a>
      </p>

      <p>
        Facebook:
        <a
          href="https://www.facebook.com/lolly.pp.ua.admin"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label="Go to our facebook page"
        >
          facebook.com/lolly.pp.ua.admin
        </a>
      </p>
    </section>
  );
};

export default impressum;
