import React, { Component } from 'react';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios.orders';
import './ContactData.scss';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      // ingredients: this.props.ingredients,
      // price: this.props.price,
      customer: {
        name: 'Max Schwarzmüller',
        address: {
          street: 'Teststreet 1',
          zipCode: '41351',
          country: 'Germany'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };
    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form className="data-form">
        <div className="data-form__group">
          <div className="data-form__name">Имя</div>
          <input className="data-form__input" type="text" name="name" />
        </div>
        <div className="data-form__group">
          <div className="data-form__name two">E-mail*</div>
          <input
            className="data-form__input"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="data-form__group">
          <div className="data-form__name three">Телефон</div>
          <input className="data-form__input" type="text" name="phone" />
        </div>
        <div className="data-form__group">
          <div className="data-form__name four">Адрес</div>
          <input className="data-form__input" type="text" name="street" />
        </div>
        <div className="data-form__group">
          <div className="data-form__name five">Сообщение</div>
          <input className="data-form__input" type="text" name="message" />
        </div>
        <button className="data-form__btn" clicked={this.orderHandler}>
          Заказать
        </button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className="contact-data">
        <h4>Куда отправить заказ</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
