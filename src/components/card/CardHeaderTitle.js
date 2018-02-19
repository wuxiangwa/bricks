import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from '../../utils/transform';

const CardHeaderTitle = ({
  className,
  style,
  ...props
}) => (<p {...props} style={style} className={createClassName(['card-header-title', className])}/>)

CardHeaderTitle.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default CardHeaderTitle
