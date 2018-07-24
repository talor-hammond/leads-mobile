import request from 'superagent'

import { get } from './localstorage'
import { isAuthenticated } from './auth'

export const baseURL = 'http://jumperlead.herokuapp.com/api/' // NOTE: endpoint needs to be to our web-api

export default function consume(method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' && 'query' || 'send'

  return get('token') //1
    .then(token => {
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ0YXkyMDAwIiwiaWF0IjoxNTMyMzE1MDU5LCJleHAiOjE1MzI0MDE0NTl9.ZupbgJNTTCb9D--FezRu7eKkHWLy48Qge8TiXmoj7bw" //get('token')
      const headers = {
        Accept: 'application/json'
      }
      // if(isAuthenticated()) {
      if(token) {
        headers['Authorization'] = `Bearer ${token}`
      }

      return request[method](baseURL + endpoint) //2
        .set(headers)[dataMethod](data)
        .then((res) => {
          return res //3
        })
        .catch(err => {
          throw err
        })

    })
}