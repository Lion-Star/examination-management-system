import { gitGrade , getRoom , addClass , gradeDelete , getStudent } from '@/api/class/index'


const state={
    tableData:[],//获取已经分配教室的班级
    roomList:[],//获取全部教室
    studentList:[],//获取所有已经分班的学生
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

    //获取全部教室
    getRoom( state , payload ){
        if(payload.code === 1){
            console.log(payload.data)
            state.roomList = payload.data
        }else{
            alert(payload.msg)
        }
    },

    //获取所有已经分班的学生
    getStudent( state , payload ){
        if(payload.code === 1){
            console.log(payload.data)
            state.studentList=payload.data
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

    //添加班级接口
    async addClass( {commit} , payload){
        let { className , curriculumName , classroom } = payload
        let res = await addClass({grade_name:className , subject_id:curriculumName , room_id:classroom})
        alert(res.msg)
    },

    //获取全部教室
    async getRoom( {commit} , payload){
        let res = await getRoom(payload)
        console.log(res)
        commit('getRoom',res)
    },

    //删除班级接口
    async gradeDelete( {commit} , payload ){
        let res = await gradeDelete({payload})
        console.log(res)
    },

    //获取所有已经分班的学生的接口
    async getStudent( {commit} , payload ){
        let res = await getStudent(payload)
        commit( 'getStudent' , res)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
  