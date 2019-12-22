<template>
        <el-container>
                <el-header style="height:40px;display: flex;align-items: center;">
                        <el-input v-model="studentName" placeholder="请输入学生姓名" size="mini" style="width:120px;fontSize:10px;"></el-input>
                        <el-select v-model="value" placeholder="请选择" size="mini" style="width:100px;fontSize:10px;marginLeft:15px">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="请选择" size="mini" style="width:80px;fontSize:10px;marginLeft:15px">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                        </el-select>
                        <el-button type="primary" disabled style="marginLeft:15px;height:20px;">搜索</el-button>
                        <el-button type="primary" disabled>重置</el-button>
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
                                <el-table-column label="操作">
                                        <a href="#">删除</a>
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
                studentName:'',//输入的学生姓名
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
                }],
                value: ''
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
        padding-top: 15px;
}
.el-main{
        padding: 0 20px;
}
</style>