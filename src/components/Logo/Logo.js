import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/logo.png';
import './Logo.scss';

const logo = props =>
  <Link to="/">
    <img className="page-logo" src={logoImg} alt="Lollypop logo" />
  </Link>;

export default logo;
