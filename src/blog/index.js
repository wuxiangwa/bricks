import React, { Component } from 'react';
import {connect} from 'react-redux';

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false
    }
  }
  render() {
    return (<div id="main"></div>)
  }
}
export default connect(({ auth: {isAuthenticated}, app:{menu}}) => ({
  isAuthenticated,
}))(Blog)
