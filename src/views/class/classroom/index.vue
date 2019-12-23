<template>
    <el-container>
        <el-form status-icon class="demo-ruleForm" v-show="showForm">
            <p>教室号</p>
            <el-form-item>
                <el-input type="text" v-model="roomValue"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="resetForm">取消</el-button>
            </el-form-item>
        </el-form>
        <el-header style="height:45px;">
            <el-button type="primary"> + 添加教室</el-button>
        </el-header>
        <el-main style="display: flex;flex-direction: column;">
            <el-table
                :data="roomList"
                style="width: 100%;flex:1;" 
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
        </el-main>
    </el-container>
</template>

<script>
import { mapState , mapActions } from 'vuex'
export default {
    data() {
      return {
          showForm:false,
          roomValue:''
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
      },
      //表单提交
      submitForm() {
            this.addClass({className:this.roomValue})
            this.showForm=false
      },
      resetForm() {
            this.showForm=false
      }
    },
    created(){
        this.getRoom()
    }
}
</script>

<style lang="scss" scoped>
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