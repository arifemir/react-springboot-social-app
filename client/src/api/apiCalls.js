import axios from 'axios'

const signup = (body) => {
  return axios.post('/api/1.0/users', body, {headers: {'accept-language':'en-us'}})
}

export {
  signup
}