import {
    getuserShow,
    getcaredData,
    getapiTokenList,
    getcaredAndApiToken,
    getViewTokenKou,
    getcaredAndView
} from '@/api/usershow'

const state = {
    usershowList: [], //yuan用户身份
    usershowListed: [], //用户身份
    caredData: [], //yuan身份数据
    caredDataed: [], //身份数据
    apiTokenList: [], //原api接口权限
    apiTokenListed: [], //api接口权限
    caredAndApiToken: [], //yuan身份和api权限关系
    caredAndApiTokened: [], //身份和api权限关系
    viewTokenKou: [], //yuan视图接口权限
    viewTokenKoued: [], //视图接口权限
    caredAndView: [], //yuan身份和视图权限关系
    caredAndViewed: [], //身份和视图权限关系
    size: 10, //每页默认10条
    Current: 1
}

const mutations = {
    //用户身份
    setuserShow(state, payload) {
        state.usershowList = payload
        usershuju(payload)
    },
    //身份数据
    setcaredData(state, payload) {
        state.caredData = payload
        shenfen(payload)
    },
    //api接口权限
    setapiTokenList(state, payload) {
        state.apiTokenList = payload
        handle(payload)
    },
    //身份和api权限关系
    setcaredAndApiToken(state, payload) {
        state.caredAndApiToken = payload
        caredAndApi(payload)
    },
    //视图接口权限
    setViewTokenKou(state, payload) {
        state.viewTokenKou = payload
        viewToken(payload)
    },
    //身份和视图权限关系
    setcaredAndView(state, payload) {
        state.caredAndView = payload
        caredAndviewapi(payload)
    },

    handleCurrent(state, payload) {
        state.Current = payload
        handle(state.apiTokenList)
        caredAndApi(state.caredAndApiToken)
        viewToken(state.viewTokenKou)
        caredAndviewapi(state.caredAndView)
        usershuju(state.usershowList)
        shenfen(state.caredData)
    },

    handleSize(state, payload) {
        state.size = payload
        handle(state.apiTokenList)
        caredAndApi(state.caredAndApiToken)
        viewToken(state.viewTokenKou)
        caredAndviewapi(state.caredAndView)
        usershuju(state.usershowList)
        shenfen(state.caredData)
    }
}

function usershuju(data) {
    state.usershowListed = data.slice((state.Current - 1) * state.size, state.size * state.Current)
}

function shenfen(data) {
    state.caredDataed = data.slice((state.Current - 1) * state.size, state.size * state.Current)
}

function handle(data) {
    state.apiTokenListed = data.slice((state.Current - 1) * state.size, state.size * state.Current)
}

function caredAndApi(data) {
    state.caredAndApiTokened = data.slice((state.Current - 1) * state.size, state.size * state.Current)
}

function viewToken(data) {
    state.viewTokenKoued = data.slice((state.Current - 1) * state.size, state.size * state.Current)
}

function caredAndviewapi(data) {
    state.caredAndViewed = data.slice((state.Current - 1) * state.size, state.size * state.Current)
}


const actions = {
    //用户身份
    async getuserShow({ commit }, payload) {
        const res = await getuserShow()
        commit('setuserShow', res.data)
    },
    //身份数据
    async getcaredData({ commit }, payload) {
        const res = await getcaredData()
        commit("setcaredData", res.data)
    },
    //api接口权限
    async getapiTokenList({ commit }, payload) {
        const res = await getapiTokenList()
        commit("setapiTokenList", res.data)
    },
    //身份和api权限关系
    async getcaredAndApiToken({ commit }, payload) {
        const res = await getcaredAndApiToken()
        commit("setcaredAndApiToken", res.data)
    },
    //视图接口权限
    async getViewTokenKou({ commit }, payload) {
        const res = await getViewTokenKou()
        commit("setViewTokenKou", res.data)
    },
    //身份和视图权限关系setcaredAndView
    async getcaredAndView({ commit }, payload) {
        const res = await getcaredAndView()
        commit("setcaredAndView", res.data)
    }

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}