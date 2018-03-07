import axios from 'axios'

export function concurrent (cb) {
  return axios.all(cb)
}

const api = axios.create({
  baseURL: 'https://swapi.co/api/',
  timeout: 100000,
  headers: {'Content-Type': 'application/json'}
})

export default api
