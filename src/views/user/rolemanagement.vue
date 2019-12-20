<template>
  <div class="rolemanagement">
    <div class="wrapper">
      <p>角色管理</p>
    </div>
    <div class="content">
      <div class="left">
        管理员
      </div>
      <div class="right">
        视图权限
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.rolemanagement{
  width:100%;
  height:100%;
  background:#eee;
  margin: 0;padding: 0;
}
.rolemanagement .wrapper{
  width:100%;
  height:100px;
  line-height: 100px;
  margin-left:20px;
}
.rolemanagement .wrapper p{
  font-size: 25px;
  color:#333;
}
.rolemanagement .content{
  width:100%;
  height:100%;
  margin-left: 20px;
  background:#fff;
  border-radius: 5px;
  display:flex;
}
.rolemanagement .content .left{
  width:35%;
}
</style>
