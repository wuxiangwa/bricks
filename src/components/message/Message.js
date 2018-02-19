import React from 'react';
import PropTypes from 'prop-types';
import {createClassName} from '../../utils/transform';

const Message = ({ header, type, style, children, className, size, isDelete, ...props}) => (
  <article className={createClassName(['message', type ? `is-${type}` : null, size ? `is-${size}` : null, className])} style={style}>
    { header ? MessageHeader(header, isDelete, size) : null }
    <div className="message-body">
      {children}
    </div>
</article>
)

Message.propTypes = {
  style: PropTypes.object,
  header: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.any,
  isDelete: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large']),
  type: PropTypes.oneOf([
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'link',
      'white',
      'light',
      'dark',
      'black',
      'link',
    ]),
}

const MessageHeader = (header, isDelete, size) => (<div className="message-header">
  {header} {isDelete ? <button className={createClassName(['delete', size ? `is-${size}` : null])} aria-label="delete"></button> : null }
</div>)

export default Message
