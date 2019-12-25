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
//身份和api权限关系
export function getcaredAndApiToken() {
  return request({
    url: '/user/identity_api_authority_relation',
    method: 'get'
  })
}
//获取视图权限数据
export function getViewTokenKou() {
  return request({
    url: '/user/view_authority',
    method: 'get'
  })
}
//身份和视图权限关系
export function getcaredAndView() {
  return request({
    url: '/user/identity_view_authority_relation',
    method: 'get'
  })
}