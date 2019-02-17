import React from 'react';
import Cart from '../../../assets/img/cart.png';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Teaser from '../../Lollypop/Teaser/Teaser';

import './Toolbar.scss';

const toolbar = props => {
  const { open, total_items, onSideCartOpen } = props;

  return (
    <header className="page-header">
      <Teaser code="2019VALENTINE">
        Предложение к 14 февраля: Получи скидку 20 грн.
      </Teaser>
      <button className="drawer-toggle" onClick={open}>
        <svg viewBox="0 0 86 59" id="icon-menu" width="100%" height="100%">
          <path
            d="M2.263 52.476h81.474c1.25 0 2.263 1.016 2.263 2.27v1.985c0 1.26-1.013 2.27-2.263 2.27H2.263C1.013 59 0 57.99 0 56.73v-1.985c0-1.253 1.013-2.27 2.263-2.27zm0-26.238h81.474c1.25 0 2.263 1.016 2.263 2.27v1.985c0 1.253-1.013 2.27-2.263 2.27H2.263c-1.25 0-2.263-1.017-2.263-2.27v-1.986c0-1.253 1.013-2.27 2.263-2.27zM2.263 0h81.474C84.987 0 86 1.016 86 2.27v1.985c0 1.253-1.013 2.27-2.263 2.27H2.263C1.013 6.525 0 5.507 0 4.255V2.27C0 1.015 1.013 0 2.263 0z"
            id="menu-menu"
          />
        </svg>
      </button>
      <Logo />
      <nav className="page-nav">
        <NavigationItems />
      </nav>

      <button className="sidecart_btn" onClick={onSideCartOpen}>
        <img src={Cart} alt="" />
        {/* <svg viewBox="0 0 19 19" id="icon-basket" width="100%" height="100%">
          <path d="M6 4v1H3v14h13V5h-3V4l-.036-.5C12.79 1.73 11.697 0 9.5 0S6.21 1.73 6.036 3.5M7 4.5V4c0-1.445.782-3 2.5-3S12 2.555 12 4v1H7zM15 18H4V6h2v3h1V6h5v3h1V6h2z" />
        </svg> */}
        <span>{`(${total_items >= 0 ? total_items : 0})`}</span>
      </button>
    </header>
  );
};

export default toolbar;
