<template>
  <div class="usershow">
    <div class="wrapper">
      <p>用户展示</p>
    </div>
    <div class="tab">
      <p v-for="(item,index) in list" :key="index" :class="tabIndex==index?'active':''" @click="tabclickFn(index)">{{ item }}</p>
    </div>
    <div class="info">
      <p>用户数据</p>
    </div>

    <div class="content">
      <el-table
        :data="usershowList.data"
        style="width: 100%"
      >
        <el-table-column
          prop="user_name"
          label="用户名"
          width="180"
        />
        <el-table-column
          prop="user_pwd"
          label="密码"
          min-width="180"
        />
        <el-table-column
          prop="identity_text"
          label="身份"
        />
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="10"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      list: ['用户数据', '身份数据', 'api接口权限', '身份和api接口关系', '视图接口权限', '身份和视图权限关系'],
      tabIndex: 0
    }
  },
  computed: {
    ...mapState({
      usershowList: state => state.usershow.usershowList
    })
  },
  methods: {
    ...mapActions({
      getuserShow: 'usershow/getuserShow'
    }),
    tabclickFn(index) {
      this.tabIndex = index
    }
  },
  created() {
    this.getuserShow()
  }
}
</script>

<style scoped lang="scss">
.usershow{
  width:100%;
  height:100%;
  background: #eee;
}
.usershow .wrapper{
  width:100%;
  height: 80px;
  line-height: 80px;
  padding-left:20px;
}
.usershow .wrapper p{
  font-size:25px;
  color:#333;
}
.usershow .tab{
  width:100%;
  height:50px;
  display:flex;
  margin-left:20px;
}
.usershow .tab p{
  padding:0 10px;
  height:30px;
  line-height: 30px;
  background:#fff;
}
.usershow .tab .active{
  color:rgb(0, 132, 255);
  border:1px solid rgb(0, 132, 255);
}
.usershow .info{
  width:100%;
  height:70px;
  line-height: 70px;
  margin-left:20px;
}
.usershow .info p{
  font-size: 30px;
  font-weight: 700px;
  margin-left: 0px;
}
.usershow .content{
  margin-left:20px;
}
</style>
