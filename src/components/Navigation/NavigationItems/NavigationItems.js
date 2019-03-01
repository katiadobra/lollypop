import React from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () =>
  <ul className="main-nav">
    <NavigationItem link="/">Каталог</NavigationItem>
    <NavigationItem link="/delivery">Как заказать</NavigationItem>
    <NavigationItem link="/impressum">Контакты</NavigationItem>
  </ul>;

export default navigationItems;
