// import {AxiosInstance as axios} from "axios";
import axios from "axios";
axios.defaults.baseURL = 'https://item-list-api.vercel.app'

export const fetchGet = async (url, config) => {
    return axios.get(url, config).then(response => {
        return response.data
    }).catch(error => {
        return {
            status: 110,
            statusText: '网络连接异常'
        }
    })
}

export const fetchPost = async (url, data, config) => {
  return axios.post(url, data, config).then(response => {
    return response.data
  }).catch(error => {
    return {
      status: 110,
      statusText: '网络连接异常'
    }
  })
}