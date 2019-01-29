import React from 'react';
import logoImg from '../../assets/img/logo.png';
import './Logo.scss';

const logo = props =>
  <div>
    <img className="page-logo" src={logoImg} alt="Lollypop logo" />
  </div>;

export default logo;
