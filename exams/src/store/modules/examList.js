import {getList} from '@/api/examList'
const state={
    List:[]
}
const mutations={
    seList(state,payload){
        // console.log(payload)
        state.List=payload
    }
}
const actions={
    async getList({commit},payload){
        let res=await getList(payload);
       
        commit('seList',res.exam)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }