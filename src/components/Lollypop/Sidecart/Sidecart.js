import React from 'react';
import './Sidecart.scss';

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
                    {item.qty !== 0
                      ? <div key={id} className="cart_item">
                          <span>
                            <h3>
                              {item.name} ({item.qty})
                            </h3>
                            <h3>
                              {(item.cost * item.qty).toFixed(2)}
                            </h3>
                          </span>
                        </div>
                      : null}
                  </div>
                );
              })}
            </div>
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
            <button className="sidecart__order_btn" onClick={onSideCartOpen}>
              заказать
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
