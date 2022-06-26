import axios from '../axios'

const endpoints = {
  login: (data, config) => axios.post('/user/login', data, config),
  checkItem: (code, config) => axios.post(`/item/${code}/check`),
  getProfile: () => axios.get('/user/info'),
  smsToAuth: (data, config) => {},
  smsToTravel: (data, config) => {}
}

export default endpoints
