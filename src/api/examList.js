import request from '@/utils/request'
export function getList() {
    return request({
      url: '/exam/exam',// 假地址 自行替换
      method: 'get',
    })
  }