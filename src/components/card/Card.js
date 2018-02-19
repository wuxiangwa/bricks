import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardImage from './CardImage';
import CardFooter from './CardFooter';
import {createClassName} from '../../utils/transform';

const Card = ({
  className,
  children,
  style,
  ...props
}) => (<div {...props} style={style} className={createClassName(['card is-fullwidth', className])}>{children}</div>)

Card.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Image = CardImage;
Card.Footer = CardFooter;

export default Card
