import React from 'react';
import './Details.scss';

const Details = props => {
  const { data, add, remove } = props;

  return (
    <section className="details">
      <h1>
        {data.name}
      </h1>

      <img
        src={data.src}
        alt={data.name}
        style={{
          'max-width': '100%',
          width: '100%'
        }}
      />

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
  );
};

export default Details;
