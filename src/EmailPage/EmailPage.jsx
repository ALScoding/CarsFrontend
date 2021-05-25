import React from 'react'
import { emailsService } from '../_services'

class EmailPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {}, //added
      recipient: '',
      submitted: null,
      loading: false,
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.setState({
      user: JSON.parse(localStorage.getItem('user'))
    })
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()

    const { recipient, user } = this.state

    // stop here if form is invalid
    if (!recipient) {
      return
    }

    let alertMessage = 'Is this your correct email?\nRecipient: ' + recipient

    if (confirm(alertMessage)) {
      this.setState({ submitted: true })
      console.log('Email message sent!')
    }

    this.setState({ loading: true })

    emailsService.sendEmail(recipient, user.id)
  }

  render () {
    const { recipient, submitted, error } = this.state
    return (
      <div className='container col-md-4'>
        <div className='alert alert-info'>
          In case of any security issues, please check your email security
          settings to allow less secure apps.
        </div>
        <h2>Email form</h2>
        <div className='ui segment'>
          <form name='form' onSubmit={this.handleSubmit} className='ui form'>
            <div
              className={
                'form-group' + (submitted && !recipient ? ' has-error' : '')
              }
            >
              <label htmlFor='recipient'>
                Recipient (to receive the email)
              </label>
              <input
                type='text'
                className='form-control'
                name='recipient'
                value={this.state.recipient}
                onChange={this.handleChange}
                placeholder='your email address here'
              />
              {submitted && !recipient && (
                <div className={'alert alert-danger'}>
                  a recipient is required
                </div>
              )}
            </div>
            {submitted && recipient && (
              <div className={'alert alert-success'}>
                Confirmation email was sent!
              </div>
            )}
            <div className='form-group' style={{ marginTop: '1rem' }}>
              <button className='btn btn-primary'>Send Email</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export { EmailPage }
