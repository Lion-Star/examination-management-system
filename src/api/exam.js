import request from '@/utils/request'
export function getExam(subject_id,exam_id,title,start_time,end_time) {
    return request({
      url: '/exam/exam/',// 假地址 自行替换
      method: 'post',
      params:{subject_id,exam_id,title,number,start_time,end_time}
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