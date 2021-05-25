console.log('process.env.API_BASE_URL------', process.env.REACT_APP_API_BASE_URL)
export const config = {
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'https://carbackendnode.herokuapp.com'
    // API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000'
}