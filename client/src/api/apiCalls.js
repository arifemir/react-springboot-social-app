import axios from 'axios'

const signup = (body) => {
  return axios.post('/api/1.0/users', body)
}

const changeLanguage = language => {
  axios.defaults.headers['accept-language'] = language
}

export {
  signup,
  changeLanguage
}