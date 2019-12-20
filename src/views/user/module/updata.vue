<template>
  <div class="updatas">
    <p><input type="text" placeholder="请输入用户名"></p>
    <p><input type="password" placeholder="请输入密码"></p>

    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
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
  data() {
    return {
      options: [{
        value: '选项1',
        label: '老师'
      }, {
        value: '选项2',
        label: '学生'
      }, {
        value: '选项3',
        label: '导员'
      }, {
        value: '选项4',
        label: '院长'
      }, {
        value: '选项5',
        label: '主任'
      }],
      value: ''
    }
  }
}
</script>

<style scoped lang="scss">
.updatas{
    width:100%;
}
.updatas input{
    width:85%;
    height:30px;
     margin:5px 0;
}
.updatas .butt{
    height: 80px;
    line-height: 80px;
}
.updatas .butt .sure{
    width:100px;
}
</style>
