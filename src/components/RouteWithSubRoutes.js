import React, {Component} from 'react';
import {Route} from 'react-router-dom';

class RouteWithSubRoutes extends Component {
  render() {
    const {path, routes} = this.props
    return (<Route path={path} render={props => (<this.props.component {...props} routes={routes}/>)}></Route>)
  }
}

export default RouteWithSubRoutes
