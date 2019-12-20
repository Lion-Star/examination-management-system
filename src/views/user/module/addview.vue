<template>
  <div class="addview">
    <div class="box">
      <p>添加试图接口权限</p>
    </div>
    <el-select v-model="value" placeholder="请选择身份id" class="select">
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
.addview{
    width:33%;
    border:1px solid #ccc;
    border-radius: 5px;
}
.addview .select{
    margin:5px 0 5px 10px;
}
.addview .butt{
    height: 80px;
    line-height: 80px;
      margin-left:10px;
}
.addview .butt .sure{
    width:100px;
}
.addview  .box{
  margin-left:10px;
  height:50px;

}
.addview  .box p{
 width:115px;
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
</style>
