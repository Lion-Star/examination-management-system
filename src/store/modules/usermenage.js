import { getpeopleType, getApiToken, getuserIDList, getuserList, getViewTokenID } from '@/api/usermenage'
const state = {
  dataList: [],
  peopleType: [], // 选择身份id数据
  apiTokenList: [], // 选择api接口权限数据
  ViewTokenID: [], // 请选视图权限id数据
  userIDList: []
}
const mutations = {
  // 添加用户
  setuserList(state, payload) {
    state.dataList = payload
  },
  // 选择身份id
  setpeopleType(state, payload) {
    state.peopleType = payload
  },
  // 选择api接口权限
  setApiToken(state, payload) {
    state.apiTokenList = payload
  },

  setuserIDList(state, payload) {
    state.userIDList = payload
  },

  // 请选视图权限id
  setViewTokenID(state, payload) {
    state.ViewTokenID = payload
  }
}
const actions = {
  // 添加用户
  async getuserList({ commit }, payload) {
    const res = await getuserList(payload)
    commit('setuserList', res)
  },
  // 选择身份id
  async getpeopleType({ commit }, payload) {
    const res = await getpeopleType()
    commit('setpeopleType', res)
  },
  // 选择api接口权限
  async getApiToken({ commit }, payload) {
    const res = await getApiToken()
    commit('setApiToken', res)
  },

  async getuserIDList({ commit }, payload) {
    const res = await getuserIDList()
    console.log(res)
    commit('setuserIDList', res)
  },

  // 请选视图权限id
  async getViewTokenID({ commit }, payload) {
    const params = { groupid: 1 }
    const res = await getViewTokenID(params)
    commit('setViewTokenID', res)
  }

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
