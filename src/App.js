import React, { Component } from 'react';
// import './App.scss';

import Layout from './containers/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;
