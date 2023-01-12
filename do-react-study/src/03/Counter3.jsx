import React, { Component } from 'react';

class Counter3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increateCount = this.increateCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  increateCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  resetCount() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button onClick={this.increateCount} onMouseOut={this.resetCount}>
          카운트 증가
        </button>
        버튼 밖으로 커서가 움지깅면 0으로 초기화됩니다.
      </div>
    );
  }
}

export default Counter3;
