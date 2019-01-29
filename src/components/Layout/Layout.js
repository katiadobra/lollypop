import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import LollypopList from '../../containers/LollypopList/LollypopList';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Teaser from '../Lollypop/Teaser/Teaser';

class Layout extends Component {
  state = {
    showSideDraw: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDraw: false });
  };

  // sideDrawerOpenHandler = () => {
  //   this.setState({ showSideDraw: true });
  // };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDraw: !prevState.showSideDrawer };
    });
  };

  render() {
    const { showSideDraw } = this.state;

    return (
      <Aux>
        <Teaser code="2019VALENTINE">
          Предложение к 14 февраля: Получи скидку 20 грн.
        </Teaser>
        <Toolbar open={this.sideDrawerToggleHandler} />
        <SideDrawer open={showSideDraw} closed={this.sideDrawerClosedHandler} />

        <main className="main">
          <LollypopList />
        </main>
      </Aux>
    );
  }
}

export default Layout;
