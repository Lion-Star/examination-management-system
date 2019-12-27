import request from '@/utils/request'
export function getuserList(data) {
  return request({
    url: '/user',
    method: 'post',
    data
  })
}

export function getpeopleType() {
  return request({
    url:'/user/identity',
    method: 'get'
  })
}

export function getApiToken() {
  return request({
    url: '/user/api_authority',
    method: 'get'
  })
}
export function getuserIDList() {
  return request({
    url: '/user/user',
    method: 'get'
  })
}

export function getViewTokenID(params) {
  return request({
    url: '/user/view_authority',
    method: 'get',
    params: params
  })
}
//添加身份
export function getadduserID(params){
  return request({
    url: '/user/identity/edit',
    method: 'get',
    params: params
  })
}
//添加api接口权限
export function getAddApiLists(params){
  return request({
    url: '/user/authorityApi/edit',
    method: 'get',
    params: params
  })
}
//添加视图接口权限
export function getAddViewList(){
  return request({
    url:'/user/view_authority',
    method: 'get'
  })
}
export function getAddViewkou(params){
  return request({
    url: '/user/authorityView/edit',
    method: 'get',
    params: params
  })
}
//给身份设定api接口权限
export function getcardApiIDkou(data) {
  return request({
    url: '/user/setIdentityApi',
    method: 'post',
    data
  })
}

//给身份设定视图权限
export function getAddViewTokenKou(params){
  return request({
    url: '/user/setIdentityView',
    method: 'get',
    params: params
  })
}