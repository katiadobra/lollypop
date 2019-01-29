import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import LollypopList from '../LollypopList/LollypopList';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDraw: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDraw: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDraw: !prevState.showSideDrawer };
    });
  };

  render() {
    const { showSideDraw } = this.state;

    return (
      <Aux>
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
