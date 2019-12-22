<template>
  <div class="updatas">
    
    <el-select v-model="value" placeholder="请选择身份id">
      <el-option
         v-for="item in userIDList.data"
        :key="item.user_id"
        :label="item.user_name"
        :value="item.user_name"
      />
        
    </el-select>
    <p><input type="text" placeholder="请输入用户名"></p>
    <p><input type="password" placeholder="请输入密码"></p>

    <el-select v-model="data" placeholder="请选择身份id">
      <el-option
      v-for="item in peopleType"
        :key="item.identity_id"
        :label="item.identity_text"
        :value="item.identity_text"
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
import { mapActions, mapState } from 'vuex'
export default {
   data() {
    return {
      value: '',
      data:""
    }
  },
  computed:{
    ...mapState({
      peopleType:state=>state.usermenage.peopleType,
      userIDList:state=>state.usermenage.userIDList
    })
  },
  methods:{
    ...mapActions({
      getpeopleType:"usermenage/getpeopleType",
      getuserIDList:"usermenage/getuserIDList"
    })
  },
  created(){
    this.getpeopleType()
    this.getuserIDList()
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
