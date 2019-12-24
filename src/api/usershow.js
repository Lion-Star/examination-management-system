import request from '@/utils/request'
//用户身份
export function getuserShow() {
  return request({
    url: '/user/user',
    method: 'get'
  })
}
//身份数据
export function getcaredData() {
  return request({
    url: '/user/identity',
    method: 'get'
  })
}
//api接口权限
export function getapiTokenList() {
  return request({
    url: '/user/api_authority',
    method: 'get'
  })
}