import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';

class Text extends PureComponent {
  render() {
    const { children, styles } = this.props;
    return <span {...css(styles.default)}>{children}</span>;
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(({ color, size }) => ({
  default: {
    color: color.default,
    fontSize: size.md,
  },
}))(Text);
