import React from 'react'
import ReactDOM from 'react-dom'
import { LoginPage } from '../src/LoginPage'
import { BrowserRouter as Router } from 'react-router-dom'

describe('render the LoginPage using ReactDOM', () => {
  // the test should pass
  it('LoginPage component renders without crashing', () => {
    ReactDOM.render(
      <Router>
        <LoginPage />
      </Router>,
      document.createElement('div')
    )
  })
})
