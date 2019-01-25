import React from 'react';
import Aux from '../../../hoc/Aux';

const Item = props => {
  let item1 = props.item1;

  return (
    <div className="cart_item">
      <img src={item1.src} alt="" />
      <span className="cart_info">
        <h3>
          {item1.name} x {item1.qty}
        </h3>
        <h3>
          Цена : {item1.cost} грн.
        </h3>
        <h3>
          Всего : {(item1.cost * item1.qty).toFixed(2)} грн.
        </h3>
      </span>
    </div>
  );
};

const orderSummary = props => {
  const { data, total, packaging, showPopup } = props;
  return (
    <Aux>
      <div className="order">
        <div className="cart">
          <h1>Корзина</h1>
          <div className="cart_left">
            {data.map((item1, id1) => {
              return (
                <div key={id1}>
                  {item1.qty !== 0 ? <Item item1={item1} /> : null}
                </div>
              );
            })}
          </div>
        </div>
        <div className="cart_right">
          <div className="final_price">
            <div className="cart_item">
              <h3>Items Price:</h3>
              <h3>
                {total.toFixed(2)} грн.
              </h3>
            </div>
            <div className="cart_item">
              <h3>Delivery Charges:</h3>
              <h3>Free</h3>
            </div>
            <div className="cart_item">
              <h3>Packaging:</h3>
              <h3>
                {packaging.toFixed(2)} грн.
              </h3>
            </div>
          </div>
          <div className="final_price">
            <h3>Total Price:</h3>
            <h3>
              {(total + packaging).toFixed(2)} грн.
            </h3>
          </div>

          <button className="order_btn" onClick={showPopup}>
            order now
          </button>
        </div>
      </div>
    </Aux>
  );
};

export default orderSummary;
