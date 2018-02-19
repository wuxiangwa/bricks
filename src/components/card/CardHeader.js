import React from 'react';
import PropTypes from 'prop-types';
import CardHeaderTitle from './CardHeaderTitle';
import CardHeaderIcon from './CardHeaderIcon';
import { createClassName } from '../../utils/transform';

const CardHeader = ({
  className,
  style,
  ...props
}) => (<header {...props} style={style} className={createClassName(['card-header', className])}/>)

CardHeader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

CardHeader.Title = CardHeaderTitle;
CardHeader.Icon = CardHeaderIcon;

export default CardHeader
