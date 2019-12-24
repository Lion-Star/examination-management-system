<template>
  <div class="addUser">
    <div class="wrap">
      <p class="p">添加用户</p>
    </div>
    <div class="content">
      <div class="addUpdatauser">
        <div class="tab">
          <p v-for="(item,index) in list" :key="index" :class="addUpdataIndex==index?'active':''" @click="addupdataFn(index)">{{ item }}</p>
        </div>
        <div class="wrapper">
          <Add v-if="addShow" />
        </div>
        <div class="wrapper">
          <Updatas v-if="updataShow" />
        </div>
      </div>
      <!-- 添加身份 -->
      <div class="addcarId">
        <div class="box">
          <p>添加身份</p>
        </div>
        <div class="wrap">
          <input type="text" placeholder="请输入身份名称" v-model="userID">
        </div>
        <div class="butt">
          <el-row>
            <el-button type="primary" class="sure" @click="sureClickFn">确定</el-button>
            <el-button type="info" class="newkong" @click="newClickFn">重置</el-button>
          </el-row>
        </div>
      </div>

      <!-- 添加api接口权限 -->
      <Addapi />
      <!-- 添加视图接口权限 -->
      <Addview />
      <!-- 给身份设置api接口权限 -->
      <Setapi />
      <!-- 给身份设置视图权限 -->
      <Setview />
    </div>
  </div>
</template>

<script>
import Add from './module/add'
import Updatas from './module/updata'
// 添加api接口权限
import Addapi from './module/addapi'
// 添加视图接口权限
import Addview from './module/addview'
// 给身份设置api接口权限
import Setapi from './module/setapi'
// 给身份设置视图权限
import Setview from './module/setview'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Add, Updatas, Addapi, Addview, Setapi, Setview
  },
  data() {
    return {
      list: ['添加用户', '更新用户'],
      addShow: true,
      addUpdataIndex: 0,
      updataShow: false,
      userID:""
    }
  },
  computed:{
    ...mapState({
      adduserID:state=>state.usermenage.adduserID
    })
  },
  methods: {
    addupdataFn(index) {
      this.addUpdataIndex = index
      if (this.addUpdataIndex === 0) {
        this.addShow = true
        this.updataShow = false
      } else {
        this.updataShow = true
        this.addShow = false
      }
    },
    ...mapActions({
      getuserList: 'usermenage/getuserList',
      getadduserID: 'usermenage/getadduserID'
    }),
    sureClickFn(){
      this.getadduserID({identity_text:this.userID})
      this.userID=""
    },
    newClickFn(){
      this.userID=""
    }
  }
}
</script>

<style scoped lang="scss">
.addUser{
  width:100%;
  height:100%;
  background:#eee;
  margin:0;
  padding: 0;
}
.addUser .wrap{
  width:100%;
  height:80px;
  line-height: 80px;

}
.addUser .wrap .p{
  font-size: 25px;
  margin-left:20px;
}
.addUser .content{
    width:100%;
  background:#eee;
  display:flex;
  flex-wrap: wrap;
  margin-left:1%;
}
.addUser .content .addUpdatauser{
  width:33%;
  border:1px solid #ccc;
  border-radius: 5px;
}
.addUser .content .addUpdatauser .tab{
  width:100%;
  display:flex;
  height:50px;
  margin:10px 0 0 10px;
}
.addUser .content .addUpdatauser .tab .active{
  color:rgb(0, 140, 255);
  border:1px solid rgb(0, 140, 255);
  font-weight: 700;
}
.addUser .content .addUpdatauser .tab p{
  width:80px;
  height:30px;
  line-height: 30px;
  font-size:13px;
  text-align: center;
  background:#fff;
}
.addUser .content .addUpdatauser .wrapper{
  margin-left:10px;
  width:100%;
}
.addUser .content .addcarId{
  width:33%;
  border:1px solid #ccc;
  border-radius: 5px;
  border-left:none;
   border-right:none;
}
.addUser .content .addcarId .box{
  margin-left:10px;
  height:50px;
}
.addUser .content .addcarId .box p{
   width:80px;
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
.addUser .content .addcarId .wrap{
  margin-left:10px;
}
.addUser .content .addcarId .wrap input{
  width:85%;
    height:40px;
    margin:5px 0;
}
.addUser .content .addcarId .butt{
  margin-left:10px;
}
.addUser .content .addcarId .butt{
    height: 80px;
    line-height: 80px;
}
.addUser .content .addcarId .butt .sure{
    width:100px;
}
</style>
