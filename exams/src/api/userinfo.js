import request from '@/utils/request'

//当前用户信息
export function getUserInfo() {
    return request({
        url: '/user/userInfo',
        method: 'get'
    })
}