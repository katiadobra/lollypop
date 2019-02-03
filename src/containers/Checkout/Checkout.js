import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import './Checkout.scss';

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div className="checkout" style={{ padding: '200px 0 0' }}>
        Checkout page
        <Route
          path={this.props.match.path + '/contact-data'}
          render={props =>
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />}
        />
        <button onClick={this.checkoutCancelledHandler}>Cancel</button>
        <button onClick={this.checkoutContinuedHandler}>Continue</button>
      </div>
    );
  }
}

export default Checkout;
