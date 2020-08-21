import axios from 'axios'

const signup = (body) => {
	return axios.post('/api/1.0/users', body)
}

const login = (credentials) => {
	return axios.post('/api/1.0/auth', {}, { auth: credentials })
}

const changeLanguage = (language) => {
	axios.defaults.headers['accept-language'] = language
}

export { signup, changeLanguage, login }
