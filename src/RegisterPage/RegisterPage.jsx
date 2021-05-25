import React from 'react'
import { userService } from '../_services'
import { Link } from 'react-router-dom'

class RegisterPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      license: '',
      username: '',
      password: '',
      submitted: false,
      loading: false,
      message: ''
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
    const { username, password, firstName, lastName, license } = this.state

    // stop here if form is invalid
    if (!(username && password)) {
      return
    }

    let alertMessage =
      'User info submitted: \nFirst name: ' +
      firstName +
      '\nLast name: ' +
      lastName +
      '\nLicense: ' +
      license +
      '\nUsername: ' +
      username +
      '\nPassword: ' +
      password

    alert(alertMessage)

    this.setState({ loading: true })
    userService
      .register(username, password, firstName, lastName, license)
      .then(() =>
        this.setState({
          message: 'User registered succesfully',
          loading: false
        })
      )
  }

  render () {
    const { username, password, submitted, loading, message } = this.state
    return (
      <div className='container col-md-4'>
        <h2>Register Page</h2>
        <div className='ui segment'>
          <form name='form' onSubmit={this.handleSubmit} className='ui form'>
            <div className={'form-group' + submitted}>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                className='form-control'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder='optional'
              />
              {submitted}
            </div>
            <div className={'form-group' + submitted}>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                className='form-control'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder='optional'
              />
              {submitted}
            </div>
            <div className={'form-group' + submitted}>
              <label htmlFor='license'>License</label>
              <input
                type='text'
                className='form-control'
                name='license'
                value={this.state.license}
                onChange={this.handleChange}
                placeholder='optional'
              />
              {submitted}
            </div>
            <div
              className={
                'form-group' + (submitted && !username ? ' has-message' : '')
              }
            >
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                className='form-control'
                name='username'
                value={this.state.username}
                onChange={this.handleChange}
                placeholder='required'
              />
              {submitted && !username && (
                <div className='help-block'>Username is required</div>
              )}
            </div>
            <div
              className={
                'form-group' + (submitted && !password ? ' has-message' : '')
              }
            >
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
                placeholder='required'
              />
              {submitted && !password && (
                <div className='help-block'>Password is required</div>
              )}
            </div>
            <button className='btn btn-primary' disabled={loading}>
              Register
            </button>
            {message && <div className={'alert alert-danger'}>{message}</div>}
          </form>
          <p style={{ marginTop: '1rem' }}>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </div>
      </div>
    )
  }
}

export { RegisterPage }
