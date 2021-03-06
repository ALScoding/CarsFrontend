import React from 'react'
import { Link } from 'react-router-dom'
import { userService } from '../_services'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)

    userService.logout()

    this.state = {
      carData: {},
      username: '',
      password: '',
      submitted: false,
      loading: false,
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const { username, password } = this.state

    // stop here if form is invalid
    if (!(username && password)) {
      return
    }

    this.setState({ loading: true })
    userService.login(username, password).then(
      () => {
        const { from } = this.props.location.state || {
          from: { pathname: '/home' }
        }
        this.props.history.push(from)
      },
      error => this.setState({ error, loading: false })
    )
  }

  render () {
    const { username, password, submitted, loading, error } = this.state
    return (
      <div className='container col-md-4'>
        <div className='alert alert-info'>
          Username: person@gmail.com
          <br />
          Password: secretpass
        </div>
        <h2>Login Page</h2>
        <form name='form' className='ui form' onSubmit={this.handleSubmit}>
          <div
            className={
              'form-group' + (submitted && !username ? ' has-error' : '')
            }
          >
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              className='form-control'
              name='username'
              value={username}
              onChange={this.handleChange}
            />
            {submitted && !username && (
              <div className='help-block'>Username is required!</div>
            )}
          </div>
          <div
            className={
              'form-group' + (submitted && !password ? ' has-error' : '')
            }
          >
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              className='form-control'
              name='password'
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className='help-block'>Password is required!</div>
            )}
          </div>
          <div className='form-group'>
            <button className='btn btn-primary' disabled={loading}>
              Login
            </button>
            {loading && (
              <img src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' />
            )}
            {error && <div className={'alert alert-danger'}>{error}</div>}
          </div>
        </form>
        <p style={{ marginTop: '1rem' }}>
          Don't have an account? <Link to='/register'>Register here</Link>
        </p>
      </div>
    )
  }
}

export { LoginPage }
