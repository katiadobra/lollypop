import React from 'react';
import Logo from '../../Logo/Logo';
import Nav from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import './SideDrawer.scss';

const sideDrawer = props => {
  const { open, closed } = props;

  return (
    <Aux>
      <Backdrop show={open} clicked={props.closed} />
      <div className={`side-drawer ${open ? 'open' : 'close'}`}>
        <div className="side-drawer__header">
          <span>Меню</span>
          <button className="close-btn" onClick={closed}>
            закрыть
          </button>
        </div>

        <Logo />
        <Nav />
      </div>
    </Aux>
  );
};

export default sideDrawer;
