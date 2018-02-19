import React from 'react';
import PropTypes from 'prop-types';
import {createClassName} from '../../utils/transform';

const CardContent = ({
  className,
  style,
  children,
  ...props
}) => (<div {...props} style={style} className={createClassName(['card-content', className])}>{children}</div>)

CardContent.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}

export default CardContent
