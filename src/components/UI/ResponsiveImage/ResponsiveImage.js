import React from 'react';

const responsiveImage = props => {
  const { src, alt, className } = props;

  return (
    <img
      src={src.medium}
      srcSet={`${src.small} 300w, ${src.medium} 768w, ${src.large} 1280w, ${src.xlarge ||
        src.large} 3200w`}
      alt={alt}
      className={className}
    />
  );
};

export default responsiveImage;
