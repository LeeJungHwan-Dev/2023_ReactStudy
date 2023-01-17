import React, { Component } from 'react';
import PropType from 'prop-types';
import withStyles, { css } from './withStyles';

class Text extends Component {
  render() {
    const { children, styles, large, xlarge, small, xsmall, primary, secondary } = this.props;
    return (
      <span
        {...css(
          styles.default,
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary,
        )}
      >
        {children}
      </span>
    );
  }
}

Text.propTypes = {
  children: PropType.node.isRequired,
  xsmall: PropType.bool,
  small: PropType.bool,
  large: PropType.bool,
  xlarge: PropType.bool,
  secondary: PropType.bool,
  primary: PropType.bool,
};

export default withStyles(({ color, size }) => ({
  default: {
    color: color.default,
    fontSize: size.md,
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
  },
  xsmall: {
    fontSize: size.xs,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
}))(Text);
