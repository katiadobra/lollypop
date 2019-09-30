import React, { Component } from 'react';

class ResponsiveImage extends Component {
  render() {
    const { src, alt, className } = this.props;
    return (
      <img
        src={src.small}
        srcSet={`${src.small} 600w, ${src.medium} 1000w, ${src.large} 1280w`}
        alt={alt}
        className={className}
      />
    );
  }
}

export default ResponsiveImage;
