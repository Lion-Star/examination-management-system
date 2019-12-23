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
export function gradeDelete(data) {
   let {grade_id} = data
   return request.delete('/manger/grade/update', { data: {grade_id} })
}

//更新班级信息接口
export function gradeUpdate(data) {
  return request({
      url: `/manger/grade/update`,
      method: 'put',
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

//添加教室接口
export function addRoom(data) {
  return request({
    url: '/manger/room',
    method: 'post',
    data
  })
}

//删除教室接口
export function deleteRoom(data) {
  let {room_id}=data
  return request.delete('/manger/room/delete', { data: {room_id} })
}

//获取所有已经分班的学生的接口
export function getStudent(data) {
  return request({
    url: '/manger/student',
    method: 'get',
    data
  }) 
}

//删除学生接口
export function studentDelete(data) {
  let {student_id}=data
  return request.delete('/manger/student/delete', { data: {student_id} })
}

//获取所有的课程
export function getSubject(data) {
  return request({
    url: '/exam/subject',
    method: 'get',
    data
  }) 
}