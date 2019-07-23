import React from 'react';
import './Sidecart.scss';

const CartItem = props => {
  const { item } = props;

  return (
    <div className="sidecart-item">
      <div>
        {item.name} ({item.qty})
      </div>
      <div>
        {(item.cost * item.qty).toFixed(2)}
      </div>
    </div>
  );
};

const sidecart = props => {
  const { data, total_items, total, packaging, onSideCartOpen } = props;

  return (
    <div className="sidecart">
      {total_items > 0
        ? <div className="sidecart__wrap">
            <div className="sidecart__content">
              <h2 className="sidecart__caption">Корзина</h2>
              {data.map((item, id) => {
                return (
                  <div key={id}>
                    {item.qty !== 0 && <CartItem item={item} />}
                  </div>
                );
              })}
            </div>
            <div className="final-price">
              <div className="final_price__row">
                <b>Цена:</b>
                <div>
                  {total.toFixed(2)} грн.
                </div>
              </div>
              <div className="final_price__row">
                <b>Доставка:</b>
                <div>Бесплатно</div>
              </div>
              <div className="final_price__row">
                <b>Упаковка:</b>
                <div>
                  {packaging.toFixed(2)} грн.
                </div>
              </div>
            </div>
            <div className="final-price">
              <div className="final_price__row">
                <b>Всего:</b>
                <b>
                  {(total + packaging).toFixed(2)} грн.
                </b>
              </div>
            </div>
            <button
              className="btn btn--secondary"
              onClick={onSideCartOpen}
              aria-label="Go to the next step"
            >
              Продолжить
            </button>
          </div>
        : <div className="sidecart__wrap">
            <div className="sidecart__content">
              <b>Ваша корзина пуста...</b>
            </div>
          </div>}
    </div>
  );
};

export default sidecart;
