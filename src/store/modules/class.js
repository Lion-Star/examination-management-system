import { gitGrade , getRoom } from '@/api/class/index'


const state={
    tableData:[],//获取已经分配教室的班级
    roomList:[],//获取全部教室
}

const mutations={
    //获取已经分配教室的班级
    gitGrade( state , payload ){
        if(payload.code === 1){
            state.tableData = payload.data
        }else{
            alert(payload.msg)
        }
    },
    getRoom( state , payload ){
        if(payload.code === 1){
            console.log(payload.data)
            state.roomList = payload.data
        }else{
            alert(payload.msg)
        }
    }
}

const actions={
    //获取已经分配教室的班级
    async gitGrade( {commit} , payload){
        let res = await gitGrade(payload)
        commit('gitGrade',res)
    },
    //获取全部教室
    async getRoom( {commit} , payload){
        let res = await getRoom(payload)
        commit('getRoom',res)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  