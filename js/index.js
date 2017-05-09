import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Welcome from './Welcome'
import ErrorPage from './ErrorPage'

render(
  (
    <Router history={hashHistory}>
      <Route component={ App }>
        <Route path="/" component={ Welcome } />
        <Route path="*" component={ ErrorPage } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
