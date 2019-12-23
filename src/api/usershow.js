import request from '@/utils/request'
export function getuserShow() {
  return request({
    url: '/user/user',
    method: 'get'
  })
}
