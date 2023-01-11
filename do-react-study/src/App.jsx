import './App.css';
import React from 'react';
import NewCounter from './03/NewCounter';
import Counter from './03/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount() {
    this.setState({
      count: 0,
    });
  }

  componentDidMount() {
    this.setState({
      hasDestroyed: true,
    });
  }

  render() {
    return (
      <div>
        <Counter count={this.state.count} />
        <NewCounter count={this.state.count} />
        <button onClick={this.resetCount}>리셋</button>
      </div>
    );
  }
}

export default App;
