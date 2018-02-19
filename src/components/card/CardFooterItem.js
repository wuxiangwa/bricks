import React from 'react';
import PropTypes from 'prop-types';
import {createClassName} from '../../utils/transform';

const Card = ({
  className,
  children,
  style,
  ...props
}) => (<span {...props} style={style} className={createClassName(['card-footer-item', className])}>{children}</span>)

Card.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}

export default Card
