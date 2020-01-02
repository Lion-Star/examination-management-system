import { getExam} from '@/api/exam'
const state={
    addList:[]
}
const mutations={
   setExam(state,payload){
       state.addList=payload
   }
}
const actions={
  async getExam({commit},payload){
     

      let res=await getExam(payload);
    //   console.log('res...',res)
      commit('setExam',res.data)
  }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }