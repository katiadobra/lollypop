import React, { Component } from 'react';
import Order from '../../components/Order/Order';
// import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios.orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import './Orders.scss';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <section className="orders-list">
        <h1 className="page-title">История заказов</h1>

        {this.state.orders.map(order =>
          <Order
            key={order.id}
            items={order.items}
            price={order.price}
            id={order.id}
          />
        )}
      </section>
    );
  }
}

export default withErrorHandler(Orders);
