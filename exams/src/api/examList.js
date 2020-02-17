import request from '@/utils/request'
export function getList() {
    return request({
      url: '/exam/exam',// 假地址 自行替换
      method: 'get',
    })
  }
  //获取详情页的接口
  export function getDetail(id) {
    return request({
      url: `/exam/exam/${id}`,// 假地址 自行替换
      method: 'get',
    })
  }
