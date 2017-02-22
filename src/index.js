import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'
import './index.css'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Layout from './components/Layout'
import AddArticle from './components/AddArticle'

const middleware = [ thunk ]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

const history = syncHistoryWithStore(browserHistory, store)

//Not found component
const NotFound = () =>{
  return (
    <div>Not found </div>
  )
}

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRoute component={App} />
        <Route path='/dashboard' component={App} />
        <Route path='/addArticle' component={AddArticle} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
