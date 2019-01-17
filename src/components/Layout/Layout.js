import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import logo from '../../img/logo.png';
import LollypopList from '../../containers/LollypopList/LollypopList';

const layout = props =>
  <Aux>
    <header className="page-header">
      <img src={logo} className="page-logo" alt="logo" />
      <nav>
        <ul class="page-nav">
          <li>Заколочки</li>
          <li>Резинки</li>
          <li>Обручи</li>
        </ul>
      </nav>
    </header>

    <main className="main">
      <LollypopList />
    </main>
  </Aux>;

export default layout;
