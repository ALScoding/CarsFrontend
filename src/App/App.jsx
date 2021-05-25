import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { PrivateRoute } from '../_components'
import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage'
import { RegisterPage } from '../RegisterPage'
import { VehiclePage } from '../VehiclePage'
import { EmailPage } from '../EmailPage'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "React",
      isUserAuthenticated: true
    }
  }

  render () {
    return (
      <div className='jumbotron'>
        <div className='jumbotron'>
          <Router>
            <div>
              <Route
                exact
                path='/'
                render={() => {
                  return this.state.isUserAuthenticated ? (
                    <Redirect to='/login' />
                  ) : (
                    <Redirect to='/home' />
                  )
                }}
              />
              <Route path='/login' component={LoginPage} />
              <Route path='/register' component={RegisterPage} />
              <PrivateRoute exact path='/home' component={HomePage} />
              <PrivateRoute exact path='/home' component={VehiclePage} />
              <PrivateRoute exact path='/home' component={EmailPage} />
            </div>
          </Router>
        </div>
      </div>
    )
  }
}

export { App }
