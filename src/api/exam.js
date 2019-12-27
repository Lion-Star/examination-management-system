import request from '@/utils/request'
export function getExam(mata) {
    return request({
      url: '/exam/exam/',// 假地址 自行替换
      method: 'post',
      data:mata
    })
  }
  //选择考试类型
  export function getType(){
    return request({
      url:'/exam/examType',
      method:'get'
    })
  }
  //选择课程
  export function getClass(){
    return request({
      url:'/exam/subject',
      method:'get'
    })
  }
  // export function getAll(){
  //   return request({
  //     url:'/exam/questions/new',
  //     method:'get'

  //   })
  // }