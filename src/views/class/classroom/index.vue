<template>
    <el-container>
        <el-header style="height:45px;">
            <el-button type="primary"> + 添加教室</el-button>
        </el-header>
        <el-main>
            <template>
                <el-table
                    :data="roomList"
                    style="width: 100%;" 
                    height="530"
                    :header-cell-style="{background:'#f4f4f4',color:'#555',lineHeight:'20px',fontSize:'14px'}">
                    <el-table-column
                    label="教室名">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.room_text }}</span>
                    </template>
                    </el-table-column>
                    <el-table-column label="操作">
                    <template slot-scope="scope">
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
            roomList:state=>state.class.roomList
        })
    },
    methods: {
      ...mapActions({
          getRoom:"class/getRoom"
      }),
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    created(){
        this.getRoom()
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