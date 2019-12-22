import request from '@/utils/request'

//获取已经分配教室的班级
export function gitGrade(data) {
  return request({
    url: '/manger/grade',
    method: 'get',
    data
  })
}

//添加班级接口
export function addClass(data) {
  return request({
    url: '/manger/grade',
    method: 'post',
    data
  })
}

//删除班级接口
export function gradeDelete(id) {
  return request({
    url: `/manger/grade/delete/grade_id=${id}`,
    method: 'delete'
  })
}

//更新班级信息接口
export function gradeUpdate(id) {
  return request({
    url: `/manger/grade/update/${id}`,
    method: 'put'
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

//获取所有已经分班的学生的接口
export function getStudent(data) {
  return request({
    url: '/manger/student',
    method: 'get',
    data
  }) 
}

//获取所有的课程
export function getSubject(data) {
  return request({
    url: '/exam/subject',
    method: 'get',
    data
  }) 
}