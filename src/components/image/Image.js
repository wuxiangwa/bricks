import React from 'react';
import PropTypes from 'prop-types';
import {createClassName} from '../../utils/transform';

const Image = ({
  className,
  children,
  style,
  is,
  square,
  src,
  alt,
  ...props
}) => (<figure {...props} style={style} className={createClassName([
  'image',
  square ? `is-${square}` : '',
   is ? `is-${is}` : '',
  className
])}>
<img src={src} alt={alt}/></figure>)


Image.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  is: PropTypes.oneOf([
    '16x16',
    '24x24',
    '32x32',
    '48x48',
    '64x64',
    '96x96',
    '128x128'
  ]),
  square: PropTypes.oneOf([
    'Square',
    '1by1',
    '4by3',
    '3by2',
    '16by9',
    '2by1'
  ]),
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default Image
