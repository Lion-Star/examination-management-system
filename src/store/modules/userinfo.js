import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import { getUserInfo } from "@/api/userinfo.js"

const state = {
    UserInfo: {}, //当前用户信息
}

const mutations = {
    setUserInfo(state, payload) {
        state.UserInfo = payload
    }
}

const actions = {
    //获取当前用户信息
    async getUserInfo({ commit, state }) {
        let res = await getUserInfo()
        commit('setUserInfo', res.data);
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}