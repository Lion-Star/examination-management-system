<template>
  <div class="usershow">
    <div class="wrapper">
      <p>用户展示</p>
    </div>
    <div class="tab">
      <p v-for="(item,index) in list" :key="index" :class="tabIndex==index?'active':''" @click="tabclickFn(index,item)">{{item}}</p>
    </div>
    <div class="info">
      <p>{{text}}</p>
    </div>
    <UserData v-if="showUserData"></UserData>
    <CaredDtata v-if="showCaredDtata"></CaredDtata>
    <ApiToken v-if="showApiToken"></ApiToken>
    <Caredandapi v-if="showCaredandapi"></Caredandapi>
    <ViewToken v-if="showViewToken"></ViewToken>
    <CaredAndToken v-if="showCaredAndToken"></CaredAndToken>
  </div>
</template>

<script>
import UserData from "./module/usershow/userdata"
//身份数据
import CaredDtata from "./module/usershow/careddata"
//api接口权限
import ApiToken from "./module/usershow/apiToken"
//身份和api
import Caredandapi from "./module/usershow/caredandapi"
//视图接口权限
import ViewToken from "./module/usershow/viewToken"
//身份和视图权限关系
import CaredAndToken from "./module/usershow/caredAndToken"
export default {
  data() {
    return {
      list: ['用户数据', '身份数据', 'api接口权限', '身份和api接口关系', '视图接口权限', '身份和视图权限关系'],
      tabIndex: 0,
      text:"用户数据",
      showUserData:true,
      showCaredDtata:false,
      showApiToken:false,
      showCaredandapi:false,
      showViewToken:false,
      showCaredAndToken:false
    }
  },
  components:{
UserData,CaredDtata,ApiToken,Caredandapi,ViewToken
  },
   methods: {
    tabclickFn(index,item) {
      this.tabIndex = index
      this.text=item
      if(this.tabIndex==0){
        this.showUserData=true
         this.showCaredDtata=false
         this.showApiToken=false
          this.showUserData=false
        this.showViewToken=false
        this.showCaredAndToken=false
      }
      if(this.tabIndex==1){
        this.showCaredDtata=true
        this.showUserData=false
        this.showApiToken=false
         this.showUserData=false
        this.showViewToken=false
        this.showCaredAndToken=false
      }
      if(this.tabIndex==2){
        this.showApiToken=true
        this.showCaredDtata=false
        this.showUserData=false
         this.showUserData=false
        this.showViewToken=false
        this.showCaredAndToken=false
      }
      if(this.tabIndex==3){
        this.showCaredandapi=true
        this.showApiToken=false
        this.showCaredDtata=false
        this.showUserData=false
        this.showViewToken=false
        this.showCaredAndToken=false
      }
      if(this.tabIndex==4){
        this.showViewToken=true
        this.showCaredandapi=false
        this.showApiToken=false
        this.showCaredDtata=false
        this.showUserData=false
        this.showCaredAndToken=false
      }
      if(this.tabIndex==5){
        this.showCaredAndToken=true
        this.showViewToken=false
        this.showCaredandapi=false
        this.showApiToken=false
        this.showCaredDtata=false
        this.showUserData=false
      }
    }
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
    border:1px solid #ccc;
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
