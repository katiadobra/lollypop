import React from 'react';

const impressum = () => {
  return (
    <section className="impressum">
      <h1 className="impressum__caption">
        Связаться с нами любым удобным способом
      </h1>
      <div className="impressum__btn-wrap">
        <button>Написать нам</button>
      </div>

      <p>
        <strong>ПРИЕМ ОНЛАЙН-ЗАКАЗОВ:</strong> ежедневно с 11.00 до 20.00
      </p>
      <p>
        <strong>АДРЕС МАГАЗИНА:</strong>
        Информация обновляется
      </p>

      <p>
        Email: <br />
        lolly.pp.ua@gmail.com (для заказов)
      </p>

      <p>Facebook: facebook.com/lolly.pp.ua</p>

      <p>Instagram: instagram.com/lolly.pp.ua</p>
    </section>
  );
};

export default impressum;
