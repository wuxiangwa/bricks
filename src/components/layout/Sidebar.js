import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import _ from 'lodash'
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          id: 1,
          name: 'Dashboard',
          path: '/dashboard'
        },
        {
          id: 2,
          name: 'Axios',
          path: '/demo2'
        },
        {
          id: 3,
          name: 'Chart',
          path: '/chart',
          children: [
            {id:9, name: 'Chartjs', path: '/chart/chartjs'}
          ]
        },
        {
          id: 4,
          name: 'UI Features',
          children: [
            {id:5, name: 'Buttons', path: '/buttons'},
            {id:6, name: 'Form', path: '/form'},
            {id:7, name: 'Typography', path: '/Typography'},
            {id:8, name: 'Icons', path: '/icons'},
          ]
        },
        {
          id: 10,
          name: 'Components',
          path: '/components',
          children: [
            {id: 11, name: 'BackToTop', path: '/components/backToTop'},
            {id: 12, name: 'Collapse', path: '/components/collapse'},
            {id: 13, name: 'Message', path: '/components/message'},
            {id: 16, name: 'ProgressBar', path: '/components/progressBar'},
            {id: 17, name: 'Quill', path: '/components/quill'},
          ]
        },
        {
          id: 14,
          name: 'Tables',
          path: '/tables',
          children: [
            {id: 15, name: 'Basic Tables', path: '/tables/basicTables'}
          ]
        }
      ]
    }
  };

  componentWillMount () {
    let { location } = this.props
    let menu = this.state.menu
    let currentMenu, parentItem
    parentItem = _.find(menu, vo => {
      if (vo.path === location.pathname) {
        currentMenu = vo
        return null
      } else {
        if (vo.children) {
          let childVo = _.find(vo.children, item => {
            return item.path === location.pathname
          })
          if (childVo) {
            currentMenu = childVo
            return vo
          }
        }
      }
    })
    // console.log('currentMenu:', currentMenu, null, parentItem)
    this.onToggle(currentMenu, null, parentItem)
  };

  static propTypes = {
  };
  static defaultProps = {
  };

  onToggle (item = {}, index, parentItem) {
    let menu = this.state.menu
    let vo
    if (!parentItem) {
      vo = _.find(menu, {id: item.id})
      if (!vo) return
      vo.expanded = vo.expanded ? false : true
      if (vo.expanded) {
        let others = _.filter(menu, vo => {
          return vo.id !== item.id
        })
        others.forEach(item => {
          item.expanded = false
        })
      }
    } else {
      vo = _.find(menu, {id: parentItem.id})
      vo.expanded = true
    }

    this.setState({
      menu: [...this.generateRoutesFromMenu(menu, item)]
    })

    this.props.setMenu({
        menu: [...this.generateRoutesFromMenu(menu, item)]
    })

  };

  generateRoutesFromMenu (menu = [], item) {
    for (let i = 0, l = menu.length; i < l; i++) {
      let vo = menu[i]
      vo.id !== item.id ? vo.isSelected = false : vo.isSelected = true
      if (vo.children) {
        this.generateRoutesFromMenu(vo.children, item)
      }
    }
    return menu
  }

  iconClassName (expanded) {
    return expanded ? ' is-angle-up' : ''
  }

  renderChildrenItem (menu) {
    return menu.children.map((item, index) => {
      return (
        <li key={item.id}>
          <Link
            to={item.path}
            className={ item.isSelected ? 'is-active' : ''}
            onClick={ ()=> this.onToggle(item, index, menu)}
            >{item.name}
          </Link>
        </li>
      )
    })
  }

  renderItem (menu) {

    return menu.map((item, index) => {
      return (
        <li key={item.id}>
          <Link
            to={item.path || '/'}
            className={item.isSelected ? 'is-active' : ''}
            aria-expanded= {item.expanded ? true : false}
            onClick={ ()=> this.onToggle(item, index)}
            >
            <span className={"icon is-small"}>
              <i className={"fas fa-chart-bar"}>
              </i>
            </span>
            {' ' +item.name}
            { item.children ? <span
              className={"icon is-small"}
              >
              <i
                className={`fas fa-angle-down is-angle`
              }>
              </i>
            </span> : null }
          </Link>

          { item.children && item.expanded ?
            <ul>
            { this.renderChildrenItem(item) }
            </ul> : null }
        </li>
      )
    })
  }

  render() {
    let { isMobile } = this.props
    return (
      <aside className={`menu app-sidebar animated${isMobile ? '' :' slideInLeft'}`}>
      <p className={"menu-label"}>
        General
      </p>
      <ul className={"menu-list"}>
        {this.renderItem(this.state.menu)}
      </ul>
    </aside>
    )
  }
}

export default connect(state => ({

}), dispatch => ({
  setMenu: (payload) => {
    dispatch({
      type: 'SET_MENU',
      payload,
    })
  }
}))(Sidebar)
