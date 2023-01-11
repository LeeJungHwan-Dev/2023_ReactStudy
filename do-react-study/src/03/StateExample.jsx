import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });

    console.log('작동');
  }

  render() {
    return (
      <div>
        <div>카운트 : {this.state.count}</div>
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default StateExample;
