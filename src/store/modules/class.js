import { gitGrade , getRoom , addClass , gradeDelete , getStudent ,getSubject } from '@/api/class/index'


const state={
    tableData:[],//获取已经分配教室的班级
    roomList:[],//获取全部教室
    studentList:[],//获取所有已经分班的学生
    Subject:[],//获取所有课程
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
            state.roomList = payload.data
        }else{
            alert(payload.msg)
        }
    },

    //获取所有已经分班的学生
    getStudent( state , payload ){
        if(payload.code === 1){
            state.studentList=payload.data
        }else{
            alert(payload.msg)
        }
    },

    //获取所有课程
    getSubject( state , payload){
        state.Subject=payload.data
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
        console.log(payload)
        let { className , curriculumName , classroom } = payload
        let res = await addClass({grade_name:className , subject_id:curriculumName , room_id:classroom})
        alert(res.msg)
    },

    //获取全部教室
    async getRoom( {commit} , payload){
        let res = await getRoom(payload)
        commit('getRoom',res)
    },

    //删除班级接口
    async gradeDelete( {commit} , payload ){
        console.log(payload)
        let {grade_id}=payload
        let res = await gradeDelete(grade_id)
        console.log(res)
    },

    //获取所有已经分班的学生的接口
    async getStudent( {commit} , payload ){
        let res = await getStudent(payload)
        commit( 'getStudent' , res)
    },

    //获取所有的课程
    async getSubject( {commit} , payload){
        let res = await getSubject(payload)
        commit('getSubject',res)
    },

    //更新班级信息接口
    async gradeUpdate( {commit} , payload){
        let res = await gradeUpdate(payload)
        console.log(res)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
  