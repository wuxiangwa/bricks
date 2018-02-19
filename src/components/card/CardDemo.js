import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const renderHeader = (title, icon) => (
  (title || icon)
  ? (<Card.Header>
    {
      title
        ? (<Card.Header.Title>
          {title}
        </Card.Header.Title>)
        : null
    }
    {
      icon
        ? (<Card.Header.Icon>
          {icon}
        </Card.Header.Icon>)
        : null
    }
  </Card.Header>)
  : null)

const CardDemo = ({
  className,
  children,
  style,
  title,
  src,
  alt,
  square,
  icon,
  is,
  footers,
  ...props
}) => (<Card {...props} style={style} className={className}>
  {renderHeader(title, icon)}
  {
    src
      ? (<Card.Image src={src} alt={alt} square={square} is={is}/>)
      : null
  }
  {
    children
      ? (<Card.Content>{children}</Card.Content>)
      : null
  }
  {footers}

</Card>)

CardDemo.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
  footers: PropTypes.node,
  icon: PropTypes.any
}

export default CardDemo
