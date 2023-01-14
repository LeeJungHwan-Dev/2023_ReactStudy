import React from 'react';
import PropsTypes from 'prop-types';

class ChildComponent2 extends React.Component {
  render() {
    const { objValue, requiredStringValue } = this.props;
    return (
      <div>
        <div>객체값: {String(Object.entries(objValue))}</div>
        <div>필수값: {requiredStringValue}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  objValue: PropsTypes.shape({
    name: PropsTypes.string,
    age: PropsTypes.number,
  }),

  requiredStringValue: PropsTypes.string.isRequired,
};

export default ChildComponent2;
