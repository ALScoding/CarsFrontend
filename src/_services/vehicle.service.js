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

  return fetch(`${config.API_BASE_URL}/vehicles`, requestOptions)
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${config.API_BASE_URL}/vehicles`, requestOptions).then(
    handleResponse
  )
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    // if (!response.ok) {
    //   if (response.status === 401) {
    //     // auto logout if 401 response returned from api
    //     location.reload(true)
    //   }

    //   const error = (data && data.message) || response.statusText
    //   return Promise.reject(error)
    // }
    localStorage.setItem('carData', JSON.stringify(carData))

    return data
  })
}
