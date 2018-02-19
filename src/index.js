import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';
import {
  ConnectedRouter
} from 'react-router-redux';
import App from './App';
import PrivateRoute from './PrivateRoute';
import Login from './views/Login';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  (<Provider store={store}>
    <ConnectedRouter history={createHistory()}>
      <Switch>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/" component={App}/>
      </Switch>
    </ConnectedRouter>
  </Provider>), document.getElementById('root'));

// if (module.hot) {
//   module.hot.accept();
// }
registerServiceWorker();
