import React from 'react';
import './Backdrop.scss';

const backdrop = props => {
  const { show, clicked } = props;

  return show && <div className="backdrop" onClick={clicked} />;
};

export default backdrop;
