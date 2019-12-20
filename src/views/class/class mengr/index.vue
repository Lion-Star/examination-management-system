<template>
    <el-container>
        <el-form :model="ruleForm" status-icon label-width="100px" :rules="rules" ref="ruleForm" class="demo-ruleForm" v-show="showForm">
            <el-form-item label="班级名" prop="className">
                <el-input type="text" v-model="ruleForm.className"></el-input>
            </el-form-item>
            <el-form-item label="课程名" prop="curriculumName">
                <el-input type="text" v-model="ruleForm.curriculumName"></el-input>
            </el-form-item>
            <el-form-item label="教室号" prop="classroom">
                <el-input v-model="ruleForm.classroom"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
        </el-form>
        <el-header>
            <el-button type="primary" @click="showForm = true"> + 添加班级</el-button>
        </el-header>
        <el-main>
            <template>
                <el-table
                    :data="tableData"
                    height="530"
                    :header-cell-style="{background:'#f4f4f4',color:'#555',lineHeight:'20px',fontSize:'14px'}"
                    style="width: 100%;" >
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
                        @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                    </el-table-column>
                </el-table>
            </template>
        </el-main>
    </el-container>
</template>

<script>
import { mapState , mapActions } from 'vuex'
export default {
    data() {
        //表单格式验证
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入教室号'));
            }
            callback();
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入班级名'));
            } else {
            if (this.ruleForm.curriculumName !== '') {
                this.$refs.ruleForm.validateField('curriculumName');
            }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入课程名'));
            }
            setTimeout(() => {
                if (isNaN(value)) {
                     if (this.ruleForm.classroom !== '') {
                        this.$refs.ruleForm.validateField('classroom');
                    }
                    callback();
                } else {
                    callback(new Error('不能为数字'));
                }
            }, 500);
                
        };
        return {
            showForm:false,
            //绑定数据
            ruleForm: {
                className: '',
                curriculumName: '',
                classroom: ''
            },
            rules: {
                className: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                curriculumName: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                classroom: [
                    { validator: checkAge, trigger: 'blur' }
                ]
            }
        }
    },
    computed:{
        ...mapState({
            tableData:state=>state.class.tableData
        })
    },
    methods: {
      ...mapActions({
            gitGrade:"class/gitGrade",
            addClass:"class/addClass",
            gradeDelete:"class/gradeDelete"
      }),
      handleEdit(index, row) {
            console.log(index, row);
      },
      handleDelete(row) {
            this.gradeDelete(row.grade_id)
      },
      //表单提交
      submitForm() {
            this.addClass(this.ruleForm)
            this.gitGrade()
            this.showForm=false
      },
      resetForm(formName) {
            this.$refs[formName].resetFields();
            this.showForm=false
      }
    },
    created(){
             this.gitGrade()
    }
}
</script>

<style lang="scss" scoped>
.demo-ruleForm{
    width: 500px;
    position: absolute; 
    left: 50%; 
    top: 50%;
    transform: translate(-50%, -50%); 
    z-index: 12;
    background: #ffffff;
    border-radius: 3px;
    padding: 40px 40px 0 0;
    transition:.5s;
    border: 1px solid #ccc;
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