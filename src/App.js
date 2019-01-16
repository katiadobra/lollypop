import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul class="page-nav">
              <li>Заколочки</li>
              <li>Резинки</li>
              <li>Обручи</li>
            </ul>
          </nav>
        </header>
        <a
          className="App-link"
          href="https://www.instagram.com/lolly.pp.ua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Заказать
        </a>
      </div>
    );
  }
}

export default App;
