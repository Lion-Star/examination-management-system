import {getDetail} from '@/api/examList'
const state={
    addDetail:[]
}
const mutations={
   setDetail(state,payload){
       state.addDetail=payload
   }
}
const actions={
  async getDetail({commit},payload){
     

      let res=await getDetail(payload);
    //   console.log('res...',res)
      commit('setDetail',res.data)
  }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }