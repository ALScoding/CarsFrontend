import React from 'react'
import ReactDOM from 'react-dom'
import { EmailPage } from '../src/EmailPage'
import { BrowserRouter as Router } from 'react-router-dom'

describe('render the EmailPage using ReactDOM', () => {
  // the test should pass
  it('EmailPage component renders without crashing', () => {
    ReactDOM.render(
      <Router>
        <EmailPage />
      </Router>,
      document.createElement('div')
    )
  })
})
