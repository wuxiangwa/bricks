import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from '../../utils/transform';

const CardHeaderIcon = ({
  className,
  style,
  children,
  ...props
}) => (<a  {...props} style={style} className={createClassName(['card-header-icon', className])}>
  {children}
</a>)

CardHeaderIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default CardHeaderIcon
