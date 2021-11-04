/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-11-04 17:30:30
 * @LastEditTime: 2021-11-04 19:22:55
 */

import axios from "axios"

export function request2Sever(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err.data)
    })
  });
}

export function post2Sever(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url,params).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err.data)
    })
  });
}

