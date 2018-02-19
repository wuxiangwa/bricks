import { createStore, applyMiddleware, combineReducers } from 'redux';
// import ReduxThunk from 'redux-thunk';   // 中间件，有了这个就可以支持异步action
import * as reducers from '../reducers'; // 所有的reducer


// react router

import { routerReducer, routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)


const reducer = combineReducers({
  ...reducers,
  router: routerReducer
})

// 创建store
const store = createStore(reducer, applyMiddleware(middleware));

export default store;
