import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ProgressBar = ({
  children,
  className,
  style,
  type,
  value,
  size,
  max,
  ...props
}) => (<progress className={classNames('progress', {
    [`is-${type}`]: type,
    [`is-${size}`]: size
  }, className)} value={value} max={max} style={style}>{children}</progress>)

ProgressBar.defaultProps = {
  value: 0,
  max: 100
}
ProgressBar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  type: PropTypes.oneOf([
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger'
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.any
}

export default ProgressBar
