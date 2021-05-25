import React from 'react'
import ReactDOM from 'react-dom'
import { RegisterPage } from '../src/RegisterPage'
import { BrowserRouter as Router } from 'react-router-dom'

describe('render the RegisterPage using ReactDOM', () => {
  // the test should pass
  it('RegisterPage component renders without crashing', () => {
    ReactDOM.render(
      <Router>
        <RegisterPage />
      </Router>,
      document.createElement('div')
    )
  })
})
