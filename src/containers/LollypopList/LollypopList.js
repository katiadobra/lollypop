import React, { Component } from 'react';
// import axios from '../../axios.orders';
import './LollypopList.scss';
import data from '../../assets/data.json';

import Aux from '../../hoc/Aux';
import LollypopItem from '../../components/Lollypop/LollypopItem/LollypopItem';
import OrderSummary from '../../components/Order/OrderSummary/OrderSummary';
import Sidecart from '../../components/Lollypop/Sidecart/Sidecart';
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer';

class LollypopList extends Component {
  state = {
    items: data,
    total_items: 0,
    totalPrice: 0,
    packaging: 4.99,
    thank_popup: false,
    loading: false,
    error: false,
    showSideCart: false
  };

  // componentDidMount() {
  //   axios
  //     .get('https://api.myjson.com/bins/lcjhi.json')
  //     .then(res => this.setState({ items: res.data }))
  //     .catch(error => this.setState({ error: true }));
  // }

  addToCartHandler = (id, cost) => {
    this.state.items.map(item => {
      if (item.id === id) {
        item.qty += 1;
      }
    });
    this.setState({
      total_items: this.state.total_items + 1,
      totalPrice: this.state.totalPrice + cost
    });
  };

  removeFromCartHandler = (id, cost) => {
    this.state.items.map(item => {
      if (item.id === id) {
        if (item.qty !== 0) {
          item.qty -= 1;
          this.setState({
            total_items: this.state.total_items - 1,
            total: this.state.total - cost
          });
        }
      }
    });
  };

  popup = () => {
    this.setState({
      popup: !this.state.popup
    });
  };

  thank_popup = () => {
    this.setState({
      thank_popup: !this.state.thank_popup
    });
  };

  orderBtnHandler = () => {
    this.props.history.push('./checkout');
  };

  sideCartToggleHandler = () => {
    this.setState(prevState => {
      return { showSideCart: !prevState.showSideCart };
    });
  };

  purchaseContinueHandler = () => {
    let str = [];
    let serialize = function(obj) {
      for (var p in obj)
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
      return str;
    };

    serialize(this.state.items);
    str.push('price=' + this.state.totalPrice);
    console.log('queryParams ', str);
    str = str.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + str
    });
  };

  render() {
    const {
      items,
      total_items,
      totalPrice,
      packaging,
      showSideCart
    } = this.state;

    return (
      <Aux>
        <SideDrawer
          show={showSideCart}
          closed={this.sideCartToggleHandler}
          side="right"
          caption="Корзина"
        >
          <OrderSummary
            data={items}
            price={totalPrice}
            packaging={packaging}
            purchaseContinued={this.purchaseContinueHandler}
            onOrderBtnClick={this.orderBtnHandler}
          />
        </SideDrawer>
        <div className="list-container">
          {items.map((item, id) => {
            return (
              <LollypopItem
                key={id}
                item={item}
                addToCart={this.addToCartHandler}
                removeFromCart={this.removeFromCartHandler}
              />
            );
          })}
        </div>
        <Sidecart
          data={items}
          total_items={total_items}
          total={totalPrice}
          packaging={packaging}
          onOrderBtn={this.orderBtnHandler}
          onSideCartOpen={this.sideCartToggleHandler}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default LollypopList;
