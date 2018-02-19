import React, { Component } from 'react';
import '../../assets/navbar.css';

class Navbar extends Component {
  render () {
    // let { isMobile } = this.props
    return (
      <section className={'hero is-bold app-navbar animated slideInDown'}>
        <div className={'hero-head'}>
          <nav className={"navbar is-transparent"}>

            <div className={"navbar-menu"}>
              <div className={"navbar-start"}>
                <a className={"navbar-item"}>
                  Home
                </a>
                {/* { isMobile ? (
                  <a className="nav-item is-hidden-tablet">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </a>
                ) : ()} */}
              </div>

              <div className={"navbar-end"}>
                <div className={"navbar-item"}>
                  <span>Login</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    )
  }
}
export default Navbar
