import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Checkout.scss';

import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
    items: [
      {
        id: '5c65d32c1e09019cf8325bf1',
        name: 'Reid',
        cost: 17,
        src: 'https://i.ibb.co/HFwVsf1/IMG-6231.jpg',
        qty: 0
      },
      {
        id: '5c65d32cf09a19c395e146ad',
        name: 'Sherman',
        cost: 21,
        src: 'https://i.ibb.co/HFwVsf1/IMG-6231.jpg',
        qty: 0
      }
    ]
  };

  /**
   * @todo fix this code: deserialize query
   */
  // componentWillMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   console.log('query', query);
  //   const items = {};
  //   let price = 0;
  //   for (let param of query.entries()) {
  //     if (param[0] === 'price') {
  //       price = param[1];
  //     } else {
  //       items[param[0]] = +param[1];
  //     }
  //     console.log('items[param[0]] + param[1]', items[param[0]], param[1]);
  //   }
  //   this.setState({ items: items, price: price });
  // }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    const { items, price } = this.state;

    return (
      <div className="checkout">
        <CheckoutSummary
          data={items}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={props =>
            <ContactData items={items} price={price} {...props} />}
        />
      </div>
    );
  }
}

export default Checkout;
