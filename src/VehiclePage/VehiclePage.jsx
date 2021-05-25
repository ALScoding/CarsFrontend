import React from 'react'
import { vehicleService } from '../_services/'

class VehiclePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}, //added
      lease: false,
      seats: 2,
      year: 2020,
      make: '',
      model: '',
      trim: '',
      specs: '',
      submitted: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.setState({
      user: JSON.parse(localStorage.getItem('user'))
    })
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const { lease, seats, year, make, model, trim, specs, user } = this.state

    let alertMessage =
      'Is this information correct?\nLease: ' +
      lease +
      '\nSeats: ' +
      seats +
      '-seater\nYear: ' +
      year +
      '\nMake: ' +
      make +
      '\nModel: ' +
      model +
      '\nTrim: ' +
      trim +
      '\nSpecs: ' +
      specs
    if (confirm(alertMessage)) {
      console.log('Vehicle information submitted!')
    }

    this.setState({ loading: true })
    let carData = [lease, seats, year, make, model, trim, specs, user.id]

    vehicleService.submitData(carData)
  }

  render () {
    const { submitted } = this.state
    return (
      <div className='container col-md-4'>
        <div className='alert alert-info'>
          Here you may submit any information about your vehicles which will be
          stored in the database.
        </div>
        <h2>Vehicle Page</h2>
        <div className='ui segment'>
          <form name='form' onSubmit={this.handleSubmit} className='ui form'>
            <div
              className={'container col-md-4 float-left form-group' + submitted}
            >
              <label htmlFor='lease'>Lease? </label>
              <input
                name='lease'
                type='checkbox'
                checked={this.state.lease}
                onChange={this.handleInputChange}
              />
              {submitted}
            </div>
            <div className={'form-group' + submitted}>
              <label htmlFor='seats'># of seats? </label>
              <select
                name='seats'
                type='number'
                value={this.state.seats}
                onChange={this.handleInputChange}
              >
                <option value='2'>2-seater</option>
                <option value='4'>4-seater</option>
                <option value='5'>5-seater</option>
                <option value='6'>6-seater</option>
                <option value='8'>8-seater</option>
              </select>
              {submitted}
            </div>
            <div className={'form-group' + submitted}>
              <label htmlFor='year'>Year:</label>
              <input
                className='form-control'
                name='year'
                type='number'
                value={this.state.years}
                onChange={this.handleInputChange}
                placeholder='2020'
              />
              {submitted}
            </div>
            <div className={'form-group' + submitted}>
              <label htmlFor='make'>Make:</label>
              <input
                className='form-control'
                name='make'
                type='string'
                value={this.state.make}
                onChange={this.handleInputChange}
                placeholder='Volkswagen'
              />
              {submitted}
            </div>
            <div className={'form-group' + submitted}>
              <label htmlFor='model'>Model:</label>
              <input
                className='form-control'
                name='model'
                type='string'
                value={this.state.model}
                onChange={this.handleInputChange}
                placeholder='Golf'
              />
              {submitted}
            </div>
            <div className={'form-group' + submitted}>
              <label htmlFor='trim'>Trim:</label>
              <input
                className='form-control'
                name='trim'
                type='string'
                value={this.state.trim}
                onChange={this.handleInputChange}
                placeholder='TSI Edition'
              />
              {submitted}
            </div>
            <div className={'form-group' + submitted}>
              <label htmlFor='model'>Specs:</label>
              <input
                className='form-control'
                name='specs'
                type='string'
                value={this.state.specs}
                onChange={this.handleInputChange}
                placeholder='170 HP'
              />
              {submitted && (
                <div className='help-block'>Vehicle information submitted!</div>
              )}
            </div>
            <div className='form-group' style={{ marginTop: '1rem' }}>
              <button className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export { VehiclePage }
