import { getuserShow,getcaredData,getapiTokenList } from '@/api/usershow'
const state = {
  usershowList: [],//用户身份
  caredData:[],//身份数据
  apiTokenList:[],//api接口权限
}
const mutations = {
  //用户身份
  setuserShow(state, payload) {
    state.usershowList = payload
  },
  //身份数据
  setcaredData(state,payload){
    state.caredData=payload
  },
  //api接口权限
  setapiTokenList(state,payload){
    state.apiTokenList=payload
  }
}
const actions = {
  //用户身份
  async getuserShow({ commit }, payload) {
    const res = await getuserShow()
    commit('setuserShow', res.data)
  },
  //身份数据
  async getcaredData({commit},payload){
    const res=await getcaredData()
    commit("setcaredData",res.data)
  },
  //api接口权限
  async getapiTokenList({commit},payload){
    const res=await getapiTokenList()
    commit("setapiTokenList",res.data)
  }

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
