import React, { Component } from 'react';
import './LollypopItem.scss';

class LollypopItem extends Component {
  render(props) {
    let item = this.props.item;
    let addToCart = this.props.addToCart;
    let removeFromCart = this.props.removeFromCart;

    return (
      <div className="llp-item item-containe">
        <div className="llp-item__img-wrap">
          <img src={item.src} alt={item.name} className="img llp-item__img" />
        </div>

        <div className="llp-item__descr">
          <h3 className="llp-item__ttl">
            {item.name}
          </h3>

          <p className="llp-item__price">
            {item.cost.toFixed(2)} грн.
          </p>
          <button className="btn" onClick={() => addToCart(item.id, item.cost)}>
            В корзину
          </button>
          <button
            className="btn btn--delete"
            onClick={() => removeFromCart(item.id, item.cost)}
          >
            Удалить
          </button>
        </div>
      </div>
    );
  }
}

export default LollypopItem;
