import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import LollypopItem from '../LollypopItem/LollypopItem';

class LollypopList extends Component {
  render() {
    return (
      <Aux>
        <LollypopItem />
      </Aux>
    );
  }
}

export default LollypopList;
