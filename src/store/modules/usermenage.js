import {getuserList,getpeopleType,getApiToken,getViewTokenID,getuserIDList} from "@/api/usermenage"
import { param } from "@/utils"
const state={
    dataList:[],
    peopleType:[],//选择身份id数据
    apiTokenList:[],//选择api接口权限数据
    ViewTokenID:[],//请选视图权限id数据
    userIDList:[]
}
const mutations={
    setuserList(state,payload){
        state.dataList=payload 
    },
     //选择身份id
    setpeopleType(state,payload){
        state.peopleType=payload
    },
    //选择api接口权限
    setApiToken(state,payload){
        state.apiTokenList=payload
    },

    setuserIDList(state,payload){
        state.userIDList=payload
    },

    //请选视图权限id
    setViewTokenID(state,payload){
        state.ViewTokenID=payload
    },


}
const actions={
  async  getuserList({commit},payload){
        let res=await getuserList(payload)
        commit("setuserList",res)
    },
    //选择身份id
    async getpeopleType({commit},payload){
        let res=await getpeopleType()
        commit("setpeopleType",res.data)
    },
    //选择api接口权限
    async getApiToken({commit},payload){
        let res=await getApiToken()
        commit("setApiToken",res)
    },

    async getuserIDList({commit},payload){
        let res=await getuserIDList()
        console.log(res)
        commit("setuserIDList",res)
    },

    //请选视图权限id
    async getViewTokenID({commit},payload){
           let params={groupid:1}
        let res=await getViewTokenID(params)
        console.log(res)
        commit("setViewTokenID",res)
    },

 
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  