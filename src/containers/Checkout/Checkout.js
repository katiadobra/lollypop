import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './Checkout.scss';
import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    const { itms, purchased } = this.props;

    return (
      <div className="checkout">
        {itms && !purchased
          ? <div>
              <CheckoutSummary
                data={itms}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
              />
              <Route
                path={this.props.match.path + '/contact-data'}
                component={ContactData}
              />
            </div>
          : <Redirect to="/" />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itms: state.itemActions.items,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
