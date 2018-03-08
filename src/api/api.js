import axios from 'axios'
import { Observable } from 'rxjs'

export function concurrent (cb) {
  return axios.all(cb)
}

const api = axios.create({
  baseURL: 'https://swapi.co/api/',
  timeout: 100000,
  headers: {'Content-Type': 'application/json'}
})

// eslint-disable-next-line
export const get = (url, config) => Observable
  .fromPromise(axios.get(url, config))
  .map((resp) => resp.data)
  .catch((err) => Observable.throw(err.response.data))

export default api
