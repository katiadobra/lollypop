import React, { Component } from 'react';
import './ThanksPage.scss';

class ThanksPage extends Component {
  returnHandler = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="thank-you">
        <section className="page-info">
          <h1 className="thank-you__ttl">Спасибо за заказ!</h1>
          <p>
            Мы свяжемся с Вами по почте или по указанному номеру телефона для
            уточнения деталей заказа и, после оплаты, доставим посылку в
            ближайшее время.
          </p>
          <button
            className="btn btn--secondary"
            onClick={this.returnHandler}
            aria-label="Go to main page"
          >
            Вернуться к покупкам
          </button>
        </section>
      </div>
    );
  }
}

export default ThanksPage;
