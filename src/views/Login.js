import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  componentWillReceiveProps (nextProps) {
    let { isAuthenticated } = nextProps
    if (isAuthenticated) {
      nextProps.history.push((nextProps.location.state || {}).from || '/')
    }
  }
  render() {
    return <button onClick={this.props.login}>Login Here!</button>
  }
}

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated
}), dispatch => ({
  login: () => {
    dispatch({
      type: 'AUTH_SUCCESS'
    })
  }
}))(Login)
