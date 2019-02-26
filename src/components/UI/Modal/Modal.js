import React, { Component } from 'react';
import './Modal.scss';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    const { show, modalClosed } = this.props;

    return (
      <Aux>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          className="page-modal"
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
