import {getClass} from '@/api/exam'
const state={
    addClass:[]
}
const mutations={
   setClass(state,payload){
       state.addClass=payload
   }
}
const actions={
  async getClass({commit},payload){
     

      let res=await getClass(payload);
      console.log('res...',res)
      commit('setClass',res.data)
  }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }