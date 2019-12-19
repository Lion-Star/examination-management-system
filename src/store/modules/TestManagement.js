import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import { getExamType } from "@/api/TestManagement"

const state = {
    ExamTypeList: []
}

const mutations = {
    setExamTypeList(state, payload) {
        state.ExamTypeList = payload
    }
}

const actions = {
    async getExamType({ commit, state }, payload) {
        let res = await getExamType()
        console.log(res);
        commit("setExamTypeList", res.data)

    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}