<template>
  <div class="addapi">
    <div class="box">
      <p>添加api接口权限</p>
    </div>
    <div class="wrap">
      <p><input type="text" placeholder="请输入api接口权限名称"></p>
      <p><input type="text" placeholder="请输入api接口权限url"></p>
      <p><input type="text" placeholder="请输入api接口权限方法"></p>
    </div>
    <div class="butt">
      <el-row>
        <el-button type="primary" class="sure">确定</el-button>
        <el-button type="info" class="newkong">重置</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.addapi{
    width:33%;
    border:1px solid #ccc;
    border-radius: 5px;
}
.addapi .box{
  margin-left:10px;
  height:50px;
}
.addapi .box p{
   width:110px;
  height:30px;
  line-height: 30px;
  font-size:13px;
  text-align: center;
  background:#fff;
  color:rgb(0, 140, 255);
  border:1px solid rgb(0, 140, 255);
  font-weight: 700;
  margin-top:10px;
}
.addapi .wrap{
  margin-left:10px;
}
.addapi .wrap input{
  width:85%;
    height:40px;
    margin:5px 0;
}
.addapi .butt{
  margin-left:10px;
}
.addapi .butt{
    height: 50px;
    line-height: 50px;
}
.addapi .butt .sure{
    width:100px;
}
</style>
