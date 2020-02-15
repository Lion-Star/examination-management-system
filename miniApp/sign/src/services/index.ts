import flyio from '../utils/request';
export function login(code):Promise<any>{
    return flyio.post('/user/code2session',{code})
}