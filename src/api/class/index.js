import request from '@/utils/request'

//获取已经分配教室的班级
export function gitGrade(data) {
  return request({
    url: '/manger/grade',
    method: 'get',
    data
  })
}

//获取全部教室
export function getRoom(data) {
    return request({
      url: '/manger/room',
      method: 'get',
      data
    })
  }