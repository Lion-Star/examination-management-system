<template>
  <div class="setapi">
    <div class="box">
      <p>给身份设置api接口权限</p>
    </div>
    <el-select v-model="value" placeholder="请选择身份id" class="select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <p>
      <el-select v-model="data" placeholder="请选择身份id" class="select">
        <el-option
          v-for="item in datas"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select></p>
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
      value: '',
      datas: [{
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
      data: ''
    }
  }
}
</script>

<style scoped lang="scss">
.setapi{
    width:33%;
    border:1px solid #ccc;
    border-radius: 5px;
}
.setapi .select{
     margin:5px 0 5px 10px;
}
.setapi  .box{
  margin-left:10px;
  height:50px;
}
.setapi  .box p{
 width:145px;
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
.setapi .butt{
    height: 80px;
    line-height: 80px;
     margin-left: 10px;
}
.setapi .butt .sure{
    width:100px;
}
</style>
