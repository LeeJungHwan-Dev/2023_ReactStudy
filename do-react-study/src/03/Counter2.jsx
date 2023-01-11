import React, { Component } from 'react';
import ProTypes from 'prop-types';

class Counter2 extends Component {
  render() {
    return (
      <div>
        현재 카운트: {this.props.count}
        <button onClick={() => this.props.onAdd()}>카운트 증가</button>
      </div>
    );
  }
}

Counter2.proTypes = {
  count: ProTypes.number,
  onAdd: ProTypes.func,
};

export default Counter2;
