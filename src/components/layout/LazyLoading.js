import React from 'react';
import Bundle from './Bundle';

export default(name, props) => () => (
  <Bundle load={() => import(`../../${name}`)}>
     {(Module) => (<Module {...props}/>)}
  </Bundle>
)
