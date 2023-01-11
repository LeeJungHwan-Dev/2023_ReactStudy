import React from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends React.Component {
  render() {
    let message = '';
    if (this.props.boolValue === false) {
      message = 'boolValue 기본값이 false입니다';
    }
    let message2 = '';
    if (this.props.boolValueWithoutDefault === false) {
      message2 = 'boolValueWithoutDefault 기본값이 false입니다';
    }
    return (
      <div className="message-container">
        {message}
        {message2}
      </div>
    );
  }
}

DefaultPropsComponent.propTypes = {
  boolValue: PropTypes.bool,
  boolValueWithoutDefault: PropTypes.bool,
};

DefaultPropsComponent.defaultProps = {
  boolValue: false,
};

export default DefaultPropsComponent;
