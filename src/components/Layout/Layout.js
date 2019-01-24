import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.scss';
import logo from '../../img/logo.png';
import LollypopList from '../../containers/LollypopList/LollypopList';
import Cart from '../../img/cart.png';

const layout = props =>
  <Aux>
    <div className="actionteaser">
      <span className="actionteaser__text">
        Предложение к 14 февраля: Получи скидку 20 грн.
      </span>
      <span className="actionteaser__code">
        Добавь к заказу* : 2019VALENTINE
      </span>
    </div>
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
      </button>
    </header>

    <main className="main">
      <LollypopList />
    </main>
  </Aux>;

export default layout;
