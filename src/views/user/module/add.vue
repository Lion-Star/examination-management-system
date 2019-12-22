<template>
  <div class="add">
    <p><input type="text" placeholder="请输入用户名" v-model="username" @change="userChangeFn"></p>
    <p><input type="password" placeholder="请输入密码" v-model="password" @change="passwordFn"></p>

    <el-select v-model="value" placeholder="请选择身份id">
      <el-option
        v-for="item in peopleType"
        :key="item.identity_id"
        :label="item.identity_text"
        :value="item.identity_text"
      />
    </el-select>
    <div class="butt">
      <el-row>
        <el-button type="primary" class="sure" @click="sureClickFn">确定</el-button>
        <el-button type="info" class="newkong">重置</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { log } from 'util'
export default {
  data() {
    return {
      value: '',
      username:"",
      password:""
    }
  },
  computed:{
    ...mapState({
      peopleType:state=>state.usermenage.peopleType
    })
  },
  methods:{
    ...mapActions({
      getpeopleType:"usermenage/getpeopleType"
    }),
    sureClickFn(){

    },
    passwordFn(e){
      let dat=/^[A-za-z0-9]{6,18}$/
      let yut=dat.test(e.target.value)
     if(yut){
       alert("密码格式正确")
     }else{
        alert("密码格式不正确")
        console.log(e.target.value)
     }
    },
    userChangeFn(e){
    //   let user=/^[a-z]$/
    //   let usernam=user.test(e.target.value)
    //    if(usernam){
    //     alert("用户名格式正确")
    //     }else{
    //      alert("用户名格式不正确")
    //      console.log(e.target.value)
    //  }
    }
  },
  created(){
   this.getpeopleType() 
  }
}
</script>

<style scoped lang="scss">
.add{
    width:100%;
}
.add input{
    width:85%;
    height:40px;
     margin:5px 0;
}
.add .butt{
    height: 80px;
    line-height: 80px;
}
.add .butt .sure{
    width:100px;
}
</style>
