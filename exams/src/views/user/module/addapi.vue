<template>
  <div class="addapi">
    <div class="box">
      <p>添加api接口权限</p>
    </div>
    <div class="wrap">
      <p><input type="text" placeholder="请输入api接口权限名称" v-model="apiName" @change="apiNameFn"></p>
      <p><input type="text" placeholder="请输入api接口权限url" v-model="apiUrl" @change="apiUrlFn"></p>
      <p><input type="text" placeholder="请输入api接口权限方法" v-model="apiMeans" @change="apiMeansFn"></p>
    </div>
    <div class="butt">
      <el-row>
        <!-- <el-button type="primary" class="sure" @click="sureClickFun">确定</el-button> -->
         <el-button :plain="true" @click="open2" class="sure">确定</el-button>
        <el-button type="info" class="newkong" @click="newClickFun">重置</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data(){
    return{
      apiName:'',
      apiUrl:'',
      apiMeans:''
    }
  },
  computed:{
    ...mapState({
      addapiList:state=>state.usermenage.addapiList
    })
  },
  methods:{
    ...mapActions({
      getAddApiLists:"usermenage/getAddApiLists"
    }),
    //名称
    apiNameFn(e){
      this.apiName=e.target.value
    },
    //url
    apiUrlFn(e){
      this.apiUrl=e.target.value
    },
    //权限方法
    apiMeansFn(e){
      this.apiMeans=e.target.value
    },
    //确定
     open2() {
        let obj={
            api_authority_text:this.apiName,
            api_authority_url:this.apiUrl,
            api_authority_method:this.apiMeans
          }
          this.getAddApiLists(obj)
          this.apiName='',
          this.apiUrl='',
          this.apiMeans=''
        this.$message({
          showClose: true,
          message: '添加成功',
          type: 'success'
        });
      },
    // 重置
    newClickFun(){
       this.apiName='',
      this.apiUrl='',
      this.apiMeans=''
    }
  }

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
    background:rgb(0, 140, 255);
    color:#fff;
}
</style>
