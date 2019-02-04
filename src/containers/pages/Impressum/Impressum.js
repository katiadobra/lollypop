import React from 'react';
import './Impressum.scss';
import { Link } from 'react-router-dom';

const impressum = () => {
  return (
    <section className="impressum">
      <h1 className="page-title">Контакты</h1>
      <div className="impressum__btn-wrap">
        <button>Написать нам</button>
      </div>

      <p>
        <strong>ПРИЕМ ОНЛАЙН-ЗАКАЗОВ:</strong>
        <br /> ежедневно с 11.00 до 20.00
      </p>
      <p>
        Email:
        <a href="mailto:lolly.pp.ua@gmail.com">lolly.pp.ua@gmail.com</a>
      </p>

      <p>
        Facebook:
        <a
          href="https://www.facebook.com/lolly.pp.ua.admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook.com/lolly.pp.ua.admin
        </a>
      </p>

      <p>
        Instagram:
        <a
          href="https://www.instagram.com/lolly.pp.ua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram.com/lolly.pp.ua
        </a>
      </p>
    </section>
  );
};

export default impressum;
