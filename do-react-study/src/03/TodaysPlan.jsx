import React from 'react';

class TodayPlan extends React.Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;
    return (
      <div className="body">
        <button onClick={onButtonClick}>계획없음</button>
      </div>
    );
  }
}

export default TodayPlan;
