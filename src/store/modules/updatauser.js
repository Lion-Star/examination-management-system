import { getuserInfoList, getupdataList } from '@/api/updatauser'

const state = {
    updataList: [],
    userInfoList: {}
}
const mutations = {
    setupdataList(state, payload) {
        state.updataList = payload
    },
    // 当前用户信息
    setuserInfoList(state, payload) {
        state.userInfoList = payload
    }
}
const actions = {
    async getupdataList({ commit }, payload) {
        const res = await getupdataList(payload)
        commit('setupdataList', res)
    },
    // 当前用户信息
    async getuserInfoList({ commit }, payload) {
        const res = await getuserInfoList()
        console.log(res)
        commit('setuserInfoList', res.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}