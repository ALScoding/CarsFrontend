import React from 'react'
import ReactDOM from 'react-dom'
import { VehiclePage } from '../src/VehiclePage'
import { BrowserRouter as Router } from 'react-router-dom'

describe('render the VehiclePage using ReactDOM', () => {
  // the test should pass
  it('VehiclePage component renders without crashing', () => {
    ReactDOM.render(
      <Router>
        <VehiclePage />
      </Router>,
      document.createElement('div')
    )
  })
})
