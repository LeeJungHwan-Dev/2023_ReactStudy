import React from 'react';

class TodayPlan extends React.Component {
  render() {
    const { onButtonClick } = this.props;
    return (
      <div className="body">
        <button onClick={onButtonClick}>ęłíěě</button>
      </div>
    );
  }
}

export default TodayPlan;
