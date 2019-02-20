import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import './SideDrawer.scss';

class SideDrawer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    const { show, closed, side, caption, children } = this.props;

    return (
      <Aux>
        <Backdrop show={show} clicked={closed} />
        <div
          className={`side-drawer  ${show ? 'open' : 'close'} ${side
            ? 'right'
            : ''}`}
        >
          <div className="side-drawer__header">
            <span>
              {caption}
            </span>
            <button className="close-btn" onClick={closed}>
              закрыть
            </button>
          </div>
          {children}
        </div>
      </Aux>
    );
  }
}

export default SideDrawer;
