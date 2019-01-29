import React, { Component } from 'react';
import './LollypopItem.scss';

class LollypopItem extends Component {
  render(props) {
    let item = this.props.item;
    let addToCart = this.props.addToCart;
    let removeFromCart = this.props.removeFromCart;

    return (
      <div className="llp-item item-containe">
        <img src={item.src} alt={item.name} className="img llp-item__img" />
        <div className="llp-item__descr">
          <h3 className="llp-item__ttl">
            {item.name}
          </h3>

          <p className="llp-item__price">
            {item.cost.toFixed(2)} грн.
          </p>
          <button
            className="btn"
            onClick={() => addToCart(item.name, item.cost)}
          >
            В корзину
          </button>
          <button
            className="btn btn--delete"
            onClick={() => removeFromCart(item.name, item.cost)}
          >
            Удалить
          </button>
        </div>
      </div>
    );
  }
}

export default LollypopItem;
