import { config } from '../_config'
import { authHeader } from '../_helpers'

export const vehicleService = {
  submitData,
  getAll
}

function submitData (carData) {
  console.log('from vehicle.service.ts... your information has been submitted')
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ carData })
  }

  return fetch(
    `${config.API_BASE_URL}/vehicles`,
    requestOptions
  )
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(
    `${config.API_BASE_URL}/vehicles`,
    requestOptions
  )
}
