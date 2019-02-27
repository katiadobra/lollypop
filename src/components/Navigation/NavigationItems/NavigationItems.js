import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItems.scss';

const navigationItems = props =>
  <ul className="main-nav">
    <NavigationItem link="/">Каталог</NavigationItem>
    <NavigationItem link="/delivery">Как заказать</NavigationItem>
    <NavigationItem link="/impressum">Контакты</NavigationItem>
  </ul>;

const NavigationItem = props =>
  <li>
    <NavLink to={props.link} exact>
      {props.children}
    </NavLink>
  </li>;

export default navigationItems;
