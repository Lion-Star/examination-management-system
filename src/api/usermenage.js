import request from '@/utils/request'
export function getuserList(data) {
    return request({
      url: '/user',
      method: 'post',
      data
    })
  }