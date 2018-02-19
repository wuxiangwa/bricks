import React from 'react';
import PropTypes from 'prop-types';
import {createClassName} from '../../utils/transform';
import Image from '../image/Image';

const CardImage = ({
  className,
  style,
  square,
  is,
  src,
  alt,
  ...props
}) => (<div {...props} style={style} className={createClassName(['card-image', className])}>
  <Image square={square} is={is} src={src} alt={alt} />
</div>)

CardImage.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default CardImage
