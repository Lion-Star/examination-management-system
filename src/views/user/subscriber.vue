<template>
  <div class="subscriber">
    <div class="wrapper">
      <div class="wrap">
        <p v-for="(item,index) in list" :key="index" :class="tabIndex===index?'active':''" @click="tabclickFn(index)">{{ item }}</p>
      </div>
      <div class="box">
        <p><input type="text" placeholder="请输入用户名"></p>
        <p><input type="password" placeholder="请输入密码"></p>
        <el-dropdown size="small" split-button type="primary" class="demo">
          请输入身份id
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>老师</el-dropdown-item>
            <el-dropdown-item>学生</el-dropdown-item>
            <el-dropdown-item>导员</el-dropdown-item>
            <el-dropdown-item>院长</el-dropdown-item>
            <el-dropdown-item>主任</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="butt">
        <button class="btn">确定</button>
        <button>重置</button>
      </div>
    </div>
    <div class="wrapper1">
      <div class="addID">
        <p>添加身份</p>
      </div>
      <div class="content">
        <input type="text" placeholder="请输入身份名称">
        <div class="butt">
          <button class="btn">确定</button>
          <button>重置</button>
        </div>
      </div>
    </div>
    <div class="wrapper2">12</div>
    <div class="wrapper3">3</div>
    <div class="wrapper4">45</div>
    <div class="wrapper5">56</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['添加用户', '更新用户'],
      tabIndex: 0
    }
  },
  methods: {
    tabclickFn(index) {
      this.tabIndex = index
    }
  }
}
</script>

<style scoped lang="scss">
.subscriber{
  width:100%;
  height:100%;
  display:flex;
  flex-wrap: wrap;
}
.subscriber .wrapper{
  width:33%;
  border:1px solid #ccc;
  background:#eee;
}
.subscriber .wrapper .wrap{
  display:flex;
  width:100%;
  height:60px;
  align-items: center;
  margin-left:10px;
}
.subscriber .wrapper .wrap p{
  width: 80px;
  height:30px;
  line-height: 30px;
  font-size: 12px;
  text-align: center;
  background:#fff;

}
.active{
  color:#00f;
  font-weight: 700;
  border:2px solid #00f;
}
.subscriber .wrapper .box{
  width:100%;
  margin-left:10px;
}
.subscriber .wrapper .box input{
  height:30px;
  width:80%;
  background:#fff;
}
.subscriber .wrapper .box .demo{
  background:#eee;
}
.subscriber .wrapper .butt{
  width:100%;
  height:70px;
line-height: 70px;
 margin-left:10px;
}
.subscriber .wrapper .butt button{
  width:60px;
  height:30px;
  border:none;
  background:#ccc;
  border-radius: 5px;
}
.subscriber .wrapper .butt .btn{
  width:100px;
  background:#00f;
  color:#fff;
}
.subscriber .wrapper1{
  width:33%;
  border:1px solid #ccc;
  background:#eee;
}
.subscriber .wrapper1 .addID{
  width:100%;
  height:60px;

  margin-left: 10px;
}
.subscriber .wrapper1 .addID p{
  width:80px;
  height:30px;
   background:#fff;
   line-height: 30px;
  text-align: center;
  color:#00f;
  border: 2px solid #00f;
  font-size: 13px;
}
.subscriber .wrapper1 .content{
  width:100%;
  margin-left: 10px;
}
.subscriber .wrapper2{
  width:33%;
  border:1px solid #ccc;
  background:#eee;
}
.subscriber .wrapper3{
  width:33%;
  border:1px solid #ccc;
  background:#eee;
}
.subscriber .wrapper4{
  width:33%;
  border:1px solid #ccc;
  background:#eee;
}
.subscriber .wrapper5{
  width:33%;
  border:1px solid #ccc;
  background:#eee;
}
</style>
