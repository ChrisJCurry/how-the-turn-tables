// const base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

import axios from 'axios'

export const memesApi = axios.create({
  baseURL: 'https://api.imgflip.com/get_memes',
  timeout: 10000
})

// @ts-ignore
export const officeApi = axios.create({
  baseURL: 'https://officeapi.dev/api/',
  timeout: 10000
})
