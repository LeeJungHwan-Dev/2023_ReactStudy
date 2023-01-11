import React, { Component } from 'react';
import Counter2 from './Counter2';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count,
    };
  }
  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return <Counter2 count={this.state.count} />;
  }
}

export default Counter;
