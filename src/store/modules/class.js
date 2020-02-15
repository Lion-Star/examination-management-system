import { gitGrade , getRoom , addClass , gradeDelete , getStudent ,getSubject , studentDelete ,addRoom ,deleteRoom ,gradeUpdate} from '@/api/class/index'

const state={
        tableData:[],//获取已经分配教室的班级
        roomList:[],//获取全部教室
        studentList:[],//获取所有已经分班的学生
        Subject:[],//获取所有课程
        setStudentList:[],//筛选的学生

        size : 4,//每页几条
        Current: 1,//默认页
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
            state.studentList = payload.data
            toCurrent(payload.data)
        }else{
            alert(payload.msg)
        }
    },

    //获取所有课程
    getSubject( state , payload){
        state.Subject=payload.data
    },

    //根据教室搜索学生
    setStudent(state , payload){
        let list = state.studentList.filter(item=>{
            if(item.room_text === payload){
                return item
            }
        })
        toCurrent(list)
    },

    //根据班级搜索学生
    setGradeValued(state , payload){
        let list = state.studentList.filter(item=>{
            if(item.grade_name === payload){
                return item
            }
        })
        toCurrent(list)
    },

    //姓名搜索
    setSearched(state,payload){
        if (!Array.isArray(state.studentList) && payload !== '') return
            state.setStudentList = state.studentList.filter(item=>{
                 if (item.student_name.indexOf(payload)!== -1) return item
            })

    },

    //每页几条
    handleSize(state,payload){
        state.size=payload
        toCurrent(state.studentList)
    },

    //当前页
    handleCurrent(state,payload){
        state.Current=payload
        toCurrent(state.studentList)
    }
}

//分页筛选
function toCurrent(data){
    state.setStudentList = data.slice( (state.Current-1) *state.size , state.size * state.Current)
}

const actions={
    //获取已经分配教室的班级
    async gitGrade( {commit} , payload){
        let res = await gitGrade(payload)
        commit('gitGrade',res)
    },

    //添加班级接口
    async addClass( {commit} , payload){
        let { grade_name , room_id , subject_id } = payload
        let res = await addClass({grade_name:grade_name , subject_id:subject_id , room_id:room_id})
        alert(res.msg)
    },

      //删除班级接口
      async gradeDelete( {commit} , payload ){
        let res = await gradeDelete(payload)
        alert(res.msg)
    },

     //更新班级信息接口
     async gradeUpdate( {commit} , payload){
        let {grade_id,grade_name,subject_id,room_id} = payload
        let res = await gradeUpdate({grade_id:grade_id , grade_name:grade_name , subject_id:subject_id , room_id:room_id})
        alert(res.msg)
    },

    //获取全部教室
    async getRoom( {commit} , payload){
        let res = await getRoom(payload)
        commit('getRoom',res)
    },

    //添加教室
    async addRoom( {commit} , payload){
        let res = await addRoom(payload)
        alert(res.msg)
    },

    //删除教室接口
    async deleteRoom( {commit} , payload ){
        let res = await deleteRoom(payload)
        alert(res.msg)
    },

    //获取所有已经分班的学生的接口
    async getStudent( {commit} , payload ){
        let res = await getStudent(payload)
        commit( 'getStudent' , res)
    },

    //删除学生接口
    async studentDelete( {commit} , payload){
        let res = await studentDelete(payload)
        alert(res.msg)
    },

    //获取所有的课程
    async getSubject( {commit} , payload){
        let res = await getSubject(payload)
        commit('getSubject',res)
    },

   

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
  