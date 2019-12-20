<template>
        <el-container>
                <el-header style="height:40px">Header</el-header>
                <el-main>
                        <el-table
                        :data="studentList"
                        stripe
                        style="width: 100%;">
                                <el-table-column
                                prop="student_name"
                                label="姓名">
                                </el-table-column>
                                <el-table-column
                                prop="student_id"
                                label="学号">
                                </el-table-column>
                                <el-table-column
                                prop="grade_name"
                                label="班级">
                                </el-table-column>
                                <el-table-column
                                prop="room_text"
                                label="教室">
                                </el-table-column>
                                <el-table-column
                                prop="student_pwd"
                                label="密码">
                                </el-table-column>
                                <el-table-column
                                prop="删除"
                                label="操作">
                                </el-table-column>
                        </el-table>
                        <div class="block">
                                <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage4"
                                :page-sizes="[100, 200, 300, 400]"
                                :page-size="100"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="400">
                                </el-pagination>
                        </div>
                </el-main>
        </el-container>
</template>

<script>
import {mapState ,mapActions} from 'vuex'
export default {
        methods: {
                ...mapActions({
                      getStudent:"class/getStudent"
                }),
                handleSizeChange(val) {
                        console.log(`每页 ${val} 条`);
                },
                handleCurrentChange(val) {
                        console.log(`当前页: ${val}`);
                }
        },
        computed:{
                ...mapState({
                       studentList:state=>state.class.studentList 
                })
        },
        data() {
           return {
                   tableData:[{date: '2016-05-02',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄'}],
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
           }
        },
        created(){
                this.getStudent()
        }      
}
</script>

<style lang="scss" scoped>
.el-header{
        display: flex;
        align-items: center;
}
.block{
        margin-left: 35%;
}
</style>