import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getRandom(params) {
  return request({
    url: '/vue-admin-template/table/rand',
    method: 'get',
    params
  })
}