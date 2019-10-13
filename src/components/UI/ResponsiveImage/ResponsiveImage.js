import React, { Component } from 'react';

class ResponsiveImage extends Component {
  render() {
    const { path, alt, className } = this.props;
    return (
      <img
        src={path.src}
        srcSet={`${path.src} 600w, ${path.img.medium} 1000w, ${path.img
          .large} 1280w`}
        alt={alt}
        className={className}
      />
    );
  }
}

export default ResponsiveImage;
