import {
  getpeopleType, getApiToken, getuserIDList, getuserList, getViewTokenID,
  getadduserID, getAddApiLists, getAddViewList,getAddViewkou,getcardApiIDkou,getAddViewTokenKou
} from '@/api/usermenage'
const state = {
  dataList: [],
  peopleType: [], // 选择身份id数据
  apiTokenList: [], // 选择api接口权限数据
  ViewTokenID: [], // 请选视图权限id数据
  userIDList: [],
  adduserID: {},//添加身份
  addapiList: [],//添加api接口权限

  addViewList: [],  //添加视图接口权限
  addViewkou: {},

  cardApiIDkou:{},//给身份设定api接口权限
  AddViewTokenKou:{},//给身份设定视图权限
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
  },
  //添加身份
  setadduserID(state, payload) {
    state.adduserID = payload
  },
  //添加api接口权限
  setAddApiToken(state, payload) {
    state.addapiList = payload
  },
  //添加视图接口权限
  setAddViewList(state, payload) {
    state.addViewList = payload
  },
  setAddViewkou(state,payload){
    state.addViewkou=payload
  },
//给身份设定api接口权限
  setcardApiIDkou(state,payload){
    state.cardApiIDkou=payload
  },
  //给身份设定视图权限
  setAddViewTokenKou(state,payload){
    state.AddViewTokenKou=payload
  }
}
const actions = {
  // 添加用户
  async getuserList({ commit }, payload) {
    const res = await getuserList(payload)
    commit('setuserList', res)
  },
  // 选择身份id
  async getpeopleType({ commit }) {
    let res = await getpeopleType()
    commit('setpeopleType', res)
  },
  // 选择api接口权限
  async getApiToken({ commit }, payload) {
    let res = await getApiToken()
    commit('setApiToken', res)
  },

  async getuserIDList({ commit }, payload) {
    let res = await getuserIDList()
    commit('setuserIDList', res)
  },

  // 请选视图权限id
  async getViewTokenID({ commit }, payload) {
    let params = { groupid: 1 }
    let res = await getViewTokenID(params)
    commit('setViewTokenID', res)
  },
  //添加身份
  async getadduserID({ commit }, payload) {
    let res = await getadduserID(payload)
    commit("setadduserID", res)
  },

  //添加api接口权限
  async getAddApiLists({ commit }, payload) {
    let res = await getApiToken(payload)
    commit("setAddApiToken", res)
  },
  //添加视图接口权限
  async getAddViewList({ commit }, payload) {
    let res = await getAddViewList()
    commit("setAddViewList", res.data)
  },
   async getAddViewkou({commit},payload){
    let res=await getAddViewkou(payload)
    commit("setAddViewkou",res)
   },
//给身份设定api接口权限
async getcardApiIDkou({commit},payload){
  let res=await getcardApiIDkou(payload)
  commit("setcardApiIDkou",res)
},
//给身份设定视图权限setAddViewTokenKou
async getAddViewTokenKou({commit},payload){
  let res=await getAddViewTokenKou(payload)
  commit("setAddViewTokenKou",res)
}
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
