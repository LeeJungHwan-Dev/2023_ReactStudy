import './App.css';
import { Component } from 'react';
import TodaysPlan from './03/TodaysPlan';

class App extends Component {
  render() {
    return (
      <div className="body">
        <TodaysPlan />
      </div>
    );
  }
}

export default App;
