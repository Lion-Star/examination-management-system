<template>
  <div class="setview">
    <div class="box">
      <p>添加试图接口权限</p>
    </div>
    <el-select v-model="value" placeholder="请选择身份id" class="select" @change="caredIdFun">
      <el-option
        v-for="item in peopleType"
        :key="item.identity_id"
        :label="item.identity_text"
        :value="item.identity_text"
      />
    </el-select>
    <p>
      <el-select v-model="data" placeholder="请选视图权限id" class="select" @change="viewIdFun">
        <el-option
          v-for="item in addViewList"
           :key="item.view_authority_id"
            :label="item.view_authority_text"
            :value="item.view_authority_id"
        />
      </el-select></p>
    <div class="butt">
      <el-row>
        <el-button type="primary" class="sure" @click="sureClickFun">确定</el-button>
        <el-button type="info" class="newkong" @click="newClickFun">重置</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      value: '',
      data: '',
      caredId:"",
      viewId:""
    }
  },
  computed: {
    ...mapState({
      peopleType: state => state.usermenage.peopleType.data,
      addViewList:state=>state.usermenage.addViewList,
      AddViewTokenKou:state=>state.usermenage.AddViewTokenKou
    })
  },
  methods: {
    ...mapActions({
      getpeopleType: 'usermenage/getpeopleType',
      getAddViewList:"usermenage/getAddViewList",
      getAddViewTokenKou:"usermenage/getAddViewTokenKou"
    }),
    caredIdFun(item){
      this.caredId=item
    },
    viewIdFun(item){
      this.viewId=item
    },
    //确定
    sureClickFun(){
      this.getAddViewTokenKou({identity_id:this.caredId,view_authority_id:this.viewId})
    },
    //重置
    newClickFun(){
        this.value= '',
        this.data=''
    }
  },
  created() {
    this.getpeopleType()
    this.getAddViewList()
  }
}
</script>

<style scoped lang="scss">
.setview{
    width:33%;
    border:1px solid #ccc;
    border-radius: 5px;
}
.setview .select{
      margin:5px 0 5px 10px;
}
.setview  .box{
  margin-left:10px;
  height:50px;
}
.setview  .box p{
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
.setview .butt{
    height: 80px;
    line-height: 80px;
     margin-left: 10px;
}
.setview .butt .sure{
    width:100px;
}
</style>
