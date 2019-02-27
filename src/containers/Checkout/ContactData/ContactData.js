import React, { Component } from 'react';
import axios from '../../../axios.orders';
import { connect } from 'react-redux';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';

import './ContactData.scss';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

let data = {
  name: {
    elementType: 'input',
    elementConfig: {
      type: 'text'
    },
    value: '',
    label: 'Имя',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  email: {
    elementType: 'email',
    elementConfig: {
      type: 'email'
    },
    value: '',
    label: 'Email',
    validation: {
      required: false,
      isEmail: true
    },
    valid: false,
    touched: false
  },
  phone: {
    elementType: 'input',
    elementConfig: {
      type: 'text'
    },
    value: '',
    label: 'Телефон',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  city: {
    elementType: 'input',
    elementConfig: {
      type: 'text'
    },
    value: '',
    label: 'Город',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  np: {
    elementType: 'input',
    elementConfig: {
      type: 'text'
    },
    value: '',
    label: '№ отделения НП',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  message: {
    elementType: 'textarea',
    elementConfig: {
      type: 'text'
    },
    value: '',
    label: 'Сообщение',
    validation: {
      required: false
    },
    valid: true,
    touched: false
  }
};

class ContactData extends Component {
  state = {
    orderForm: data,
    formIsValid: false
  };

  orderHandler = event => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }

    const order = {
      price: this.props.price,
      items: this.props.itms.filter(item => item.qty > 0),
      orderData: formData
    };

    // from mapDispatchToProps
    this.props.onOrder(order);
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim !== '' && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

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
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  render() {
    const { loading } = this.props;
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
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            change={e => this.inputChangedHandler(e, formElement.id)}
          />
        )}

        <button
          className="btn btn--secondary"
          disabled={!this.state.formIsValid}
        >
          Заказать
        </button>
      </form>
    );

    if (loading) {
      form = <Spinner />;
    }

    return (
      <div className="contact-data">
        <h3 className="page-title">Информация о доставке</h3>
        <p>
          Заполните, пожалуйста, поля формы, чтобы мы могли доставить Ваш заказ.
        </p>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itms: state.itemActions.items,
    price: state.itemActions.totalPrice,
    loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrder: orderData => dispatch(actions.purchase(orderData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withErrorHandler(ContactData, axios)
);
