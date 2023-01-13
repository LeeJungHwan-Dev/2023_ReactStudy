import React from 'react';
import PropsType from 'prop-types';

class BooleanComponent extends React.Component {
  render() {
    const message = this.props.bored ? '놀러가자' : '하던 일 열심히 마무리하기';
    return <div className="message-container">{message}</div>;
  }
}

BooleanComponent.propsType = {
  bored: PropsType.string,
};

export default BooleanComponent;
