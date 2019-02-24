import React, { Component } from 'react';
import './404.scss';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h4 className="not-found__ttl">404</h4>
        <p>Страница не найдена</p>
        <div>
          <button className="not-found__btn btn">Войти</button>
        </div>
      </div>
    );
  }
}

export default NotFound;
