import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import Levelbar from './Levelbar';
import RouteWithSubRoutes from '../RouteWithSubRoutes';
import LazyLoading from './LazyLoading';

const Common = ({routes}) => {
  return (<div>
    {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}
  </div>)
}

const routes = [
  {
    path: '/dashboard',
    component: LazyLoading('views/dashboard')
  }, {
    path: '/buttons',
    component: LazyLoading('views/ui/Buttons')
  }, {
    path: '/chart',
    component: Common,
    routes: [
      {
        path: '/chart/chartjs',
        component: LazyLoading('views/charts/Chartjs')
      }
    ]
  }, {
    path: '/components',
    component: Common,
    routes: [
      {
        path: '/components/Default',
        component: LazyLoading('views/components/Default')
      }, {
        path: '/components/backToTop',
        component: LazyLoading('views/components/BackToTop')
      }, {
        path: '/components/collapse',
        component: LazyLoading('views/components/Collapse')
      }, {
        path: '/components/message',
        component: LazyLoading('views/components/Message')
      }, {
        path: '/components/progressBar',
        component: LazyLoading('views/components/ProgressBar')
      }, {
        path: '/components/quill',
        component: LazyLoading('views/components/Quill')
      }
    ]
  }, {
    path: '/tables',
    component: Common,
    routes: [
      {
        path: '/tables/basicTables',
        component: LazyLoading('views/tables/BasicTables')
      }
    ]
  }, {
    path: '/form',
    component: LazyLoading('views/ui/Form')
  }, {
    path: '/typography',
    component: LazyLoading('views/ui/Typography')
  }, {
    path: '/icons',
    component: LazyLoading('views/ui/Icons')
  }
]

class AppMain extends PureComponent {
  render() {
    return (<section className={"app-main"}>
      <div className={"container is-fluid is-marginless app-content"}>
        <Levelbar></Levelbar>
        {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}
      </div>
    </section>)
  }
}

export default connect(({app: {
    menu
  }}) => ({menu}))(AppMain)
