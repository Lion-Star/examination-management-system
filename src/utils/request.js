import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
        baseURL: 'https://exam.jasonandjay.com', // url = base url + request url
        // baseURL: 'http://169.254.44.58:7002', // url = base url + request url
        // withCredentials: true, // send cookies when cross-domain requests
        timeout: 5000 // request timeout
    })
    // request interceptor
service.interceptors.request.use(
    config => {
        // do something before reques    is sent
        if (getToken) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers['authorization'] = getToken()
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(

    response => {
        const res = response.data

        if (res.code !== 1) {
            Message({
                message: res.msg || 'Error',
                type: 'error',
                duration: 5 * 1000
            });
            //容错处理
            try {
                if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                    // to re-login
                    MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                        confirmButtonText: 'Re-Login',
                        cancelButtonText: 'Cancel',
                        type: 'warning'
                    }).then(() => {
                        store.dispatch('user/resetToken').then(() => {
                            location.reload()
                        })
                    })
                }
            } catch {
                return Promise.reject(new Error(res.message || 'Error'))
            }
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service