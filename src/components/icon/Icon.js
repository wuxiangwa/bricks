import React from 'react';
import PropTypes from 'prop-types';
import {createClassName} from '../../utils/transform';

const Icon = ({
  className,
  style,
  icon,
  size,
  fontSize,
  prefix,
  ...props
}) => (<span {...props} style={style} className={createClassName(['icon',size, className])}>
  <i className={createClassName([prefix || 'fas', fontSize, `fa-${icon}`])}></i>
</span>)

Icon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  size: PropTypes.oneOf([
    'is-small',
    'is-medium',
    'is-large'
  ]),
  fontSize: PropTypes.oneOf([
    'fa-lg',
    'fa-2x',
    'fa-3x'
  ]),
}


export default Icon
