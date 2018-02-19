import React, { PureComponent } from 'react'
import {Navbar, Sidebar, AppMain, FooterBar} from './components/layout';
import {connect} from 'react-redux';
import './assets/main.css';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false
    }
  }
  componentWillMount() {
    const {body} = document
    const WIDTH = 768
    const RATIO = 3

    const handler = () => {
      if (!document.hidden) {
        let rect = body.getBoundingClientRect()
        let isMobile = rect.width - RATIO < WIDTH
        this.setState({isMobile})
      }
    }

    document.addEventListener('visibilitychange', handler)
    window.addEventListener('DOMContentLoaded', handler)
    window.addEventListener('resize', handler)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname === '/components') {
      this.props.history.push('/components/default')
    }
  }

  render() {
    return (<div>
      <Navbar isMobile={this.state.isMobile}></Navbar>
      <Sidebar isMobile={this.state.isMobile} location={this.props.location}></Sidebar>
      <AppMain></AppMain>
      <FooterBar></FooterBar>
    </div>)
  }
}
export default connect(({ auth: {isAuthenticated}, app:{menu}}) => ({
  isAuthenticated,
}))(App)
