import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/userInfo',
    method: 'get',
    params: { token }
  })
}
export function getViewAuthority() {
  return request({
      url: '/useriew_authority',
      method: 'get'
  })
}
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
