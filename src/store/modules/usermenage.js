import {getuserList} from "@/api/usermenage"
const state={
    dataList:[]
}
const mutations={
    setuserList(state,payload){
        state.dataList=payload
    }
}
const actions={
  async  getuserList({commit},payload){
        let res=await getuserList(payload)
        commit("setuserList",res)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  