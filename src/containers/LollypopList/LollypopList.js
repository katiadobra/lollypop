import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
// import Modal from '../../components/UI/Modal/Modal';
import LollypopItem from '../../components/Lollypop/LollypopItem/LollypopItem';
import OrderSummary from '../../components/Lollypop/OrderSummary/OrderSummary';
import './LollypopList.scss';
import ThanksPage from '../../components/Lollypop/ThanksPage/ThanksPage';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios.orders';

class LollypopList extends Component {
  state = {
    items: [
      {
        id: 'item_1043',
        name: 'jelly',
        src: 'https://i.ibb.co/HFwVsf1/IMG-6231.jpg',
        cost: 5.8,
        qty: 0
      },
      {
        id: 'item_1044',
        name: 'kebab',
        src: 'https://i.ibb.co/m6WbyXW/IMG-6274.jpg',
        cost: 7.9,
        qty: 0
      },
      {
        id: 'item_1045',
        name: 'knives set',
        src: 'https://i.ibb.co/TH91h5m/IMG-6264.jpg',
        cost: 30,
        qty: 0
      },
      {
        id: 'item_1057',
        name: 'pumpkin',
        src: 'https://i.ibb.co/djP9njp/IMG-6263.jpg',
        cost: 5,
        qty: 0
      },
      {
        id: 'item_1062',
        name: 'strawberry',
        src: 'https://i.ibb.co/hy7Qf3L/IMG-6249.jpg',
        cost: 5,
        qty: 0
      },
      {
        id: 'item_1058',
        name: 'pumpki',
        src: 'https://i.ibb.co/MVZvPhS/IMG-6235.jpg',
        cost: 7,
        qty: 0
      },
      {
        id: 'item_1063',
        name: 'strawberry',
        src: 'https://i.ibb.co/tJbnv97/IMG-6230.jpg',
        cost: 5,
        qty: 0
      }
    ],
    total_items: 0,
    total: 0,
    packaging: 1.99,
    popup: false,
    thank_popup: false,
    loading: false
  };

  add = (name, cost) => {
    this.state.items.map((item, id) => {
      if (item.name === name) {
        item.qty += 1;
      }
    });
    this.setState({
      total_items: this.state.total_items + 1,
      total: this.state.total + cost
    });
  };

  remove = (name, cost) => {
    this.state.items.map((item, id) => {
      if (item.name === name) {
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

  reload = () => {
    window.location.href = window.location.href;
  };

  orderBtnHandler = () => {
    this.setState({ loading: true });
    const order = {
      price: this.state.total,
      items: this.state.total_items,
      customer: {
        name: 'Nata',
        adress: 'Berlin 12345',
        email: 'lolly.pp.ua@gmail.com'
      }
    };
    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false, thank_popup: true });
        console.log(response);
      })
      .catch(error => this.setState({ loading: false }));
  };

  render() {
    const { items, total_items, total, packaging } = this.state;

    // let orderSummary = (
    //   <OrderSummary
    //     data={items}
    //     total={total}
    //     packaging={packaging}
    //     onOrderBtnClick={this.orderBtnHandler}
    //   />
    // );
    // if (this.state.loading) {
    //   orderSummary = <Spinner />;
    // }

    return (
      <Aux>
        <div className="list-container">
          {items.map((item, id) => {
            return (
              <LollypopItem
                key={id}
                item={item}
                addToCart={this.add}
                removeFromCart={this.remove}
              />
            );
          })}
        </div>
        <div className="sidecart">
          {total_items !== 0
            ? <div className="popup">
                <div className="cart">
                  <h2 className="sidecart__caption">Корзина</h2>
                  {this.state.items.map((item1, id1) => {
                    return (
                      <div key={id1}>
                        {item1.qty !== 0
                          ? <div key={id1} className="cart_item">
                              <span>
                                <h3>
                                  {item1.name} ({item1.qty})
                                </h3>
                                <h3>
                                  {(item1.cost * item1.qty).toFixed(2)}
                                </h3>
                              </span>
                            </div>
                          : null}
                      </div>
                    );
                  })}
                </div>
                <div>
                  <div className="final_price">
                    <div className="cart_item final_price__row">
                      <h3>Цена:</h3>
                      <div>
                        {total.toFixed(2)} грн.
                      </div>
                    </div>
                    <div className="cart_item final_price__row">
                      <h3>Доставка:</h3>
                      <div>Бесплатно</div>
                    </div>
                    <div className="cart_item final_price__row">
                      <h3>Упаковка:</h3>
                      <div>
                        {packaging.toFixed(2)} грн.
                      </div>
                    </div>
                  </div>
                  <div className="final_price final_price__row">
                    <h3>Общая стоимость:</h3>
                    <div>
                      {(total + packaging).toFixed(2)} грн.
                    </div>
                  </div>
                  <button className="order_btn" onClick={() => this.popup()}>
                    заказать
                  </button>
                </div>
              </div>
            : <div className="popup">
                <b>Ваша корзина пуста...</b>
              </div>}
        </div>
        <div className="orderpage">
          {this.state.popup
            ? this.state.total_items !== 0
              ? <OrderSummary
                  data={items}
                  total={total}
                  packaging={packaging}
                  onOrderBtnClick={this.orderBtnHandler}
                />
              : null
            : null}

          {this.state.thank_popup && <ThanksPage reload={this.reload} />}
          {this.state.loading && <Spinner />}
        </div>
      </Aux>
    );
  }
}

export default LollypopList;
