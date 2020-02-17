import request from '@/utils/request'
export function getupdataList(data) {
  return request({
    url: '/user/user',
    method: 'put',
    data: data
  })
}
// 当前用户信息
export function getuserInfoList() {
  return request({
    url: '/user/userInfo',
    method: 'get'
  })
}
