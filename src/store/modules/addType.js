import {getType} from '@/api/exam'
const state={
    addType:[]
}
const mutations={
   setType(state,payload){
       state.addType=payload
   }
}
const actions={
  async getType({commit},payload){
     

      let res=await getType(payload);
    //   console.log('res...',res)
      commit('setType',res.data)
  }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }