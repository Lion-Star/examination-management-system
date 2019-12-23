import request from '@/utils/request'

//获取所有的试题类型
export function getExamType() {
    return request({
        url: '/exam/getQuestionsType',
        method: 'get'
    })
}

//获取所有的试题
export function getAllText() {
    return request({
        url: '/exam/questions/new',
        method: 'get'
    })
}

//获取所有的课程
export function getClassList() {
    return request({
        url: '/exam/subject',
        method: 'get'
    })
}

//获取所有的考试类型
export function getExamList() {
    return request({
        url: '/exam/examType',
        method: 'get'
    })
}

//添加试题
export function AddQuestions(data) {
    return request({
        url: '/exam/questions',
        method: 'post',
        data
    })
}

//添加试题类型
export function insertQuestionsType(data) {
    return request({
        url: '/exam/insertQuestionsType',
        method: 'get',
        params: data
    })
}

//按条件查询试题
export function searchQuestion(data) {
    return request({
        url: '/exam/questions/condition',
        method: 'get',
        params: data
    })
}

//更新试题
export function updateQuestions(data) {
    return request({
        url: '/exam/questions/update',
        method: 'put',
        params: data
    })
}