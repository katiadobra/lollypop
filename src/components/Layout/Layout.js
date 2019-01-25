import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.scss';
import LollypopList from '../../containers/LollypopList/LollypopList';
import Toolbar from '../Navigation/Toolbar/Toolbar';

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
    <Toolbar />

    <main className="main">
      <LollypopList />
    </main>
  </Aux>;

export default layout;
