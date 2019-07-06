import React from 'react';
import './Details.scss';

const Details = props => {
  const { data, add, remove } = props;

  return (
    <div className="details-page">
      <section className="details">
        <h1>
          {data.name}
        </h1>

        <img className="details__img" src={data.src} alt={data.name} />

        <button
          className="btn btn--primary btn--small"
          onClick={() => add(data.id, data.cost)}
        >
          В корзину
        </button>
        <button
          className="btn btn--default btn--small"
          disabled={!data.qty}
          onClick={() => remove(data.id, data.cost)}
        >
          Удалить
        </button>
      </section>
    </div>
  );
};

export default Details;
