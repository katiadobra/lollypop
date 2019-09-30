import React, { Component } from 'react';
import './Modal.scss';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    const { show, closed } = this.props;

    return (
      <Aux>
        <Backdrop show={show} clicked={closed} />
        <div
          className={`page-modal  ${show ? 'open' : 'close'}`}
          style={{
            transform: show
              ? 'translate(-50%, -50%)'
              : 'translate(-50%, -100vh)',
            opacity: show ? '1' : '0'
          }}
        >
          <div className="side-drawer__header">
            <button className="close-btn" onClick={closed}>
              закрыть
            </button>
          </div>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
