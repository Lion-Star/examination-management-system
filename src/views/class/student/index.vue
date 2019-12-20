<template>
        <el-container>
                <el-header style="height:40px">
                        <el-select
                        v-model="value"
                        multiple
                        filterable
                        remote
                        reserve-keyword
                        placeholder="请输入关键词"
                        :remote-method="remoteMethod"
                        :loading="loading">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                        </el-select>
                </el-header>
                <el-main>
                        <el-table
                        :data="studentList"
                        height="510"
                        :header-cell-style="{background:'#f4f4f4',color:'#555',lineHeight:'30px',fontSize:'14px'}"
                        stripe
                        style="width: 100%;">
                                <el-table-column
                                label="姓名"
                                prop="student_name"
                                >
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
        display: flex;
        flex-direction: row-reverse;
        padding-right: 20px;
}
.el-main{
        padding: 0 20px;
}
</style>