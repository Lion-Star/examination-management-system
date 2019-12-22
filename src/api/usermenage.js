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
      url: '/user/identity',
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
      params:params
    })
  }

 