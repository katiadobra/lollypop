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
        <button onClick={closed}>x</button>
        <Logo />
        <Nav />
      </div>
    </Aux>
  );
};

export default sideDrawer;
