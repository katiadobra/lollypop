import React, { Component } from 'react';
import './Details.scss';

import ResponsiveImage from '../../UI/ResponsiveImage/ResponsiveImage';

class Details extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.show !== this.props.show;
  }

  render() {
    const { data } = this.props;

    return (
      <div className="details-page">
        <section className="details">
          <ResponsiveImage
            src={data.img}
            alt={data.name}
            className="details__img"
          />
        </section>
      </div>
    );
  }
}

export default Details;
