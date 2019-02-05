import React, { Component } from 'react';
import axios from '../../../axios.orders';
import './ContactData.scss';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text'
        },
        value: '',
        label: 'Имя'
      },
      email: {
        elementType: 'email',
        elementConfig: {
          type: 'email'
        },
        value: '',
        label: 'Email'
      },
      phone: {
        elementType: 'input',
        elementConfig: {
          type: 'text'
        },
        value: '',
        label: 'Телефон'
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text'
        },
        value: '',
        label: 'Город'
      },
      np: {
        elementType: 'input',
        elementConfig: {
          type: 'text'
        },
        value: '',
        label: '№ отделения НП'
      },
      message: {
        elementType: 'textarea',
        elementConfig: {
          type: 'text'
        },
        value: '',
        label: 'Сообщение'
      }
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = {
      orderData: formData
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

  inputChangedHandler = (event, inputIdentifier) => {
    // copy the origin form for immutability
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    // clone deeply level of the origin form
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form className="data-form" onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement =>
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            label={formElement.config.label}
            id={formElement.id}
            change={e => this.inputChangedHandler(e, formElement.id)}
          />
        )}

        <button className="data-form__btn">Заказать</button>
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
