import React from 'react';
import './NavigationItems.scss';

const navigationItems = props =>
  <ul className="main-nav">
    <NavigationItem link="/" active>
      Заколочки
    </NavigationItem>
    <NavigationItem link="/">Резинки</NavigationItem>
    <NavigationItem link="/">Повязки</NavigationItem>
    <NavigationItem link="/">Как заказать</NavigationItem>
    <NavigationItem link="/">Контакты</NavigationItem>
  </ul>;

const NavigationItem = props =>
  <li>
    <a href={props.link} className={props.active ? 'active' : null}>
      {props.children}
    </a>
  </li>;

export default navigationItems;
