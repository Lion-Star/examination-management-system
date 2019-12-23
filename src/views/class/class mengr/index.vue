<template>
    <el-container>
        <el-header>
            <el-button type="primary"> + 添加班级</el-button>
        </el-header>
        <el-main>
            <template>
                <el-table
                    :data="tableData"
                    style="width: 100%;height: 500px;overflow-y: scroll;" >
                    <el-table-column
                    label="班级名"
                    width="100%">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.grade_name }}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="课程名"
                    width="800%">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.subject_text }}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="教室号"
                    width="120">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.room_text }}</span>
                    </template>
                    </el-table-column>
                    <el-table-column label="操作"
                    width="200%">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      return {
        
      }
    },
    computed:{
        ...mapState({
            tableData:state=>state.class.tableData
        })
    },
    methods: {
      ...mapActions({
          gitGrade:"class/gitGrade"
      }),
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    created(){
        this.gitGrade()
    }
}
</script>

<style lang="scss" scoped>
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