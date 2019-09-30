import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer';
import Nav from '../../components/Navigation/NavigationItems/NavigationItems';
import Logo from '../../components/Logo/Logo';
// import OrderSummary from '../../components/Order/OrderSummary/OrderSummary';

class Layout extends Component {
  state = {
    showSideDraw: false,
    showSideCart: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDraw: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDraw: !prevState.showSideDrawer };
    });
  };

  sideCartCloseHandler = () => {
    this.setState({ showSideCart: false });
  };

  sideCartToggleHandler = () => {
    this.setState(prevState => {
      return { showSideCart: !prevState.showSideCart };
    });
  };

  render() {
    const { showSideDraw } = this.state;

    return (
      <Aux>
        <Toolbar
          open={this.sideDrawerToggleHandler}
          onSideCartOpen={this.sideCartToggleHandler}
        />

        <SideDrawer
          show={showSideDraw}
          closed={this.sideDrawerClosedHandler}
          caption="Меню"
        >
          {showSideDraw &&
            <Aux>
              <Logo />
              <Nav />
            </Aux>}
        </SideDrawer>
        {/* <OrderSummary open={showSideCart} closed={this.sideCartCloseHandler} /> */}

        <main className="main">
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
