import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import LollypopList from './containers/LollypopList/LollypopList';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Delivery from './containers/pages/Delivery/Delivery';
import Impressum from './containers/pages/Impressum/Impressum';
import ThanksPage from './containers/pages/ThanksPage/ThanksPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/impressum" component={Impressum} />
            <Route path="/thanks" component={ThanksPage} />
            <Route path="/" exact component={LollypopList} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
