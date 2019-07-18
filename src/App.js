import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import LollypopList from './containers/LollypopList/LollypopList';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Delivery from './containers/pages/Delivery/Delivery';
import Impressum from './containers/pages/Impressum/Impressum';
import Auth from './containers/pages/Auth/Auth';
import NotFound from './containers/pages/404/404';
import ThanksPage from './containers/pages/ThanksPage/ThanksPage';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/delivery" component={Delivery} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/thanks" component={ThanksPage} />
          <Route path="/auth" component={Auth} />
          <Route path="/404" component={NotFound} />
          <Route path="/" exact component={LollypopList} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
