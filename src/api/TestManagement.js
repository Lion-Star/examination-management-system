import request from '@/utils/request'

export function getExamType() {
    return request({
        url: '/exam/getQuestionsType',
        method: 'get'
    })
}