import React, { Component } from 'react';
import './LollypopItem.scss';

import Details from '../Details/Details';
import Modal from '../../UI/Modal/Modal';

class LollypopItem extends Component {
  state = {
    showDetailsCard: false
  };

  openItemDetails = () => {
    this.setState(prevState => {
      return { showDetailsCard: !prevState.showDetailsCard };
    });
  };

  closeItemDetails = () => {
    this.setState({ showDetailsCard: false });
  };

  render() {
    const { showDetailsCard } = this.state;
    const { item, addToCart, removeFromCart } = this.props;

    return (
      <div className="llp-item item-containe">
        <div className="llp-item__img-wrap" onClick={this.openItemDetails}>
          <img src={item.src} alt={item.name} className="img llp-item__img" />
        </div>

        <div className="llp-item__descr">
          <h3 className="llp-item__ttl" onClick={this.openItemDetails}>
            {item.name}
          </h3>

          <p className="llp-item__price">
            {item.cost.toFixed(2)} грн.
          </p>
          <button
            className="btn btn--primary btn--small"
            onClick={() => addToCart(item.id, item.cost)}
            aria-label="Add item to the cart"
          >
            В корзину
          </button>
          {item.qty
            ? <button
                className="btn btn--default btn--small"
                onClick={() => removeFromCart(item.id, item.cost)}
                aria-label="Remove item from the cart"
              >
                Удалить
              </button>
            : null}
        </div>

        <Modal show={showDetailsCard} closed={this.openItemDetails}>
          {showDetailsCard &&
            <Details data={item} add={addToCart} remove={removeFromCart} />}
        </Modal>
      </div>
    );
  }
}

export default LollypopItem;
