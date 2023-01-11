import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildPropperty extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

ChildPropperty.propTypes = {
  children: PropTypes.node,
};

export default ChildPropperty;
