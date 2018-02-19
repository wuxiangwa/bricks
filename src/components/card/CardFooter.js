import React from 'react';
import PropTypes from 'prop-types';
import CardFooterItem from './CardFooterItem';
import {createClassName} from '../../utils/transform';

const CardFooter = ({
  className,
  children,
  style,
  ...props
}) => (<footer {...props} style={style} className={createClassName(['card-footer', className])}>{children}</footer>)

CardFooter.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}

CardFooter.Item = CardFooterItem;

export default CardFooter
