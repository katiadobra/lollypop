import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItems.scss';

const navigationItems = props =>
  <ul className="main-nav">
    <NavigationItem link="/">Заколочки</NavigationItem>
    <NavigationItem link="/scrunchy">Резинки</NavigationItem>
    <NavigationItem link="/afinka">Повязки</NavigationItem>
    <NavigationItem link="/delivery">Как заказать</NavigationItem>
    <NavigationItem link="/orders">Мои заказы</NavigationItem>
    <NavigationItem link="/impressum">Контакты</NavigationItem>
  </ul>;

const NavigationItem = props =>
  <li>
    <NavLink to={props.link} exact>
      {props.children}
    </NavLink>
  </li>;

export default navigationItems;
