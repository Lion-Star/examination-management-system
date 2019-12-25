<template>
    <el-container>
        <!-- 表单添加  -->
        <el-form status-icon class="demo-ruleForm" v-show="showForm">
            <p>班级名</p>
            <el-form-item>
                <el-input type="text" v-model="grade_name"></el-input>
            </el-form-item>
            <p>教室号</p>
            <el-select v-model="room_text" placeholder="请选择">
                <el-option
                v-for="item in roomList"
                :key="item.room_text"
                :label="item.room_text"
                :value="item.room_id">
                </el-option>
            </el-select>
            <p>课程名</p>
            <el-select v-model="subject_text" placeholder="请选择">
                <el-option
                v-for="(val,index) in Subject"
                :key="index"
                :label="val.subject_text"
                :value="val.subject_id">
                </el-option>
            </el-select>
            <el-form-item style="paddingTop:20px;">
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="resetForm">取消</el-button>
            </el-form-item>
        </el-form>
        <el-header>
            <el-button type="primary" @click="toForm"> + 添加班级</el-button>
        </el-header>
        <el-main style="display: flex;flex-direction: column;">
            <!-- 班级渲染 -->
            <el-table
                :data="tableData"
                :gitGrades="gitGradesd"
                :header-cell-style="{background:'#f4f4f4',color:'#555',lineHeight:'20px',fontSize:'14px'}"
                style="width: 100%;flex:1;" >
                <el-table-column
                label="班级名"
                >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.grade_name }}</span>
                </template>
                </el-table-column>
                <el-table-column
                label="课程名"
                >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.subject_text }}</span>
                </template>
                </el-table-column>
                <el-table-column
                label="教室号"
                >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.room_text }}</span>
                </template>
                </el-table-column>
                <el-table-column label="操作"
                    >
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.row)">修改</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
import { mapState , mapActions } from 'vuex'
export default {
    data() {
        return {
            edit:'',
            showForm:false,
            grade_name: '',
            room_text: '',
            subject_text: '',
            grade_id:'',
        }
    },
    computed:{
        ...mapState({
            tableData:state=>state.class.tableData,//已分班级数据
            roomList:state=>state.class.roomList,//所有教室
            Subject:state=>state.class.Subject,//所有课程
        }),
        gitGradesd: () => {
            return {
                txt: '添加成功'
            }
        },
    },
    watch:{
        gitGradesd:{
           handler(){
               this.gitGrade()
           },
           deep: true
        }
    },
    methods: {
      ...mapActions({
            gitGrade:"class/gitGrade",//已分班级
            addClass:"class/addClass",//添加
            gradeDelete:"class/gradeDelete",//删除
            getRoom:"class/getRoom",//教室
            getSubject:"class/getSubject",//课程
            gradeUpdate:"class/gradeUpdate",//修改
      }),
      //表单弹出
      toForm(){
          this.showForm = true
          this.edit = 0
      },
      //修改
      handleEdit(row) {
            this.edit = 1
            this.showForm = true
            this.grade_name= row.grade_name,
            this.room_text= row.room_id,
            this.subject_text= row.subject_id,
            this.grade_id=row.grade_id
      },
      //删除
      handleDelete(row) {
          if(confirm('是否删除')){
              this.gradeDelete({grade_id:row.grade_id})
              this.gitGrade()
          }else{
              alert('取消成功')
          }
          
      },
      //表单提交
      submitForm() {
            if(this.edit===0){
                if(confirm('是否添加')){ 
                    this.addClass({grade_name:this.grade_name,room_id: this.room_text,subject_id:this.subject_text})
                    this.grade_name= ''
                    this.room_text= ''
                    this.subject_text= ''
                    this.showForm=false
                }else{
                    alert('取消成功')
                }
            }else{
                if(confirm('是否更改')){
                    this.gradeUpdate({grade_id:this.grade_id,grade_name:this.grade_name,room_id: this.room_text,subject_id:this.subject_text})
                    this.grade_name= ''
                    this.room_text= ''
                    this.subject_text= ''
                    this.showForm=false
                }else{
                    alert('取消成功')
                }
            }
            this.gitGrade()
      },
      resetForm() {
            this.grade_name= '',
            this.room_text= '',
            this.subject_text= '',
            this.showForm=false
      }
    },
    created(){
             this.gitGrade()
             this.getRoom()
             this.getSubject()
    }
}
</script>

<style lang="scss" scoped>
.el-select{
    width: 400px;
    height: 36px;
    line-height: 36px;
}
.demo-ruleForm{
    width: 500px;
    position: absolute; 
    left: 50%; 
    top: 40%;
    transform: translate(-50%, -50%); 
    z-index: 12;
    background: #ffffff;
    border-radius: 3px;
    padding: 40px 40px 0 0;
    transition:.5s;
    border: 1px solid #000;
    padding-left: 50px;
}
.el-header{
    display: flex;
    align-items: center;
}
.el-main{
    padding: 0 20px;
}
tbody{
    height: 100%;
}
</style>