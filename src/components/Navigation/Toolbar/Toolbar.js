import React from 'react';
import Cart from '../../../img/cart.png';
import logo from '../../../img/logo.png';
import './Toolbar.scss';

const toolbar = props =>
  <header className="page-header">
    <img src={logo} className="page-logo" alt="logo" />
    <nav>
      <ul class="page-nav">
        <li>Заколочки</li>
        <li>Резинки</li>
        <li>Обручи</li>
      </ul>
    </nav>
    <button className="popup_btn">
      <img src={Cart} alt="" />
      {props.total_items !== 0
        ? <span>
            {props.total_items}
          </span>
        : null}
    </button>
  </header>;

export default toolbar;
