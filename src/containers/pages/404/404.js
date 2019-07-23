import React, { Component } from 'react';
import './404.scss';

class NotFound extends Component {
  returnHandler = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="not-found">
        <div className="page-info">
          <h4 className="not-found__ttl">404</h4>
          <p>Страница не найдена</p>
          <div>
            <button
              className="btn btn--secondary"
              onClick={this.returnHandler}
              aria-label="Go to main page"
            >
              На главную
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
