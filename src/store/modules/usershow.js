import {getuserShow} from "@/api/usershow"
const state={
    usershowList:[]
}
const mutations={
    setuserShow(state,payload){
        state.usershowList=payload
    }
}
const actions={
    async getuserShow({commit},payload){
        let res=await getuserShow()
        console.log(res.data)
        commit("setuserShow",res)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }