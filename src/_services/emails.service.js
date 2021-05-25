import { config } from '../_config'

export const emailsService = {
  sendEmail
}

function sendEmail (recipient, userId) {
  console.log('from email.service.ts... your email address has been submitted')
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ recipient, userId })
  }

  return fetch(`${config.API_BASE_URL}/emails`, requestOptions)
}
