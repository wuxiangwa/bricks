import React from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {
  render () {
    let {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props
    isAuthenticated = true //调试方便
    return (
      <Route
        {...props}
        render={props => isAuthenticated ? <Component {...props} /> : (<Redirect
          to={{
            pathname: '/login',
            state: { from: props.location.pathname }
          }}
          />
        )}
      />
    )
  }
}

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated
}))(PrivateRoute)
