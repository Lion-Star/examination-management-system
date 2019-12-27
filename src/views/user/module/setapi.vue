<template>
  <div class="setapi">
    <div class="box">
      <p>给身份设置api接口权限</p>
    </div>
    <el-select v-model="value" placeholder="请选择身份id" class="select" @change="cardFn">
      <el-option
        v-for="item in peopleType"
        :key="item.identity_id"
        :label="item.identity_text"
        :value="item.identity_id"
      />
    </el-select>
    <p>
      <el-select v-model="data" placeholder="请选api接口权限" class="select" @change="caredTokenIDFn">
        <el-option
          v-for="item in apiTokenList.data"
          :key="item.api_authority_id"
          :label="item.api_authority_text"
          :value="item.api_authority_id"
        />
      </el-select></p>
    <div class="butt">
      <el-row>
        <el-button type="primary" class="sure" @click="sureClickFun">确定</el-button>
        <el-button type="info" class="newkong" @click="newclickFun">重置</el-button>
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
      data: '',
      cardID:"",
      apiTokenId:""
    }
  },
  computed: {
    ...mapState({
      peopleType: state => state.usermenage.peopleType.data,
      apiTokenList: state => state.usermenage.apiTokenList,
      cardApiIDkou: state => state.usermenage.cardApiIDkou
    })

  },
  methods: {
    ...mapActions({
      getpeopleType: 'usermenage/getpeopleType',
      getApiToken: 'usermenage/getApiToken',
      getcardApiIDkou:"usermenage/getcardApiIDkou"
    }),
    cardFn(item){
      this.cardID=item
    },
    caredTokenIDFn(item){
      this.apiTokenId=item
    },
    //确定
    sureClickFun(){
      this.getcardApiIDkou({identity_id:this.cardID,api_authority_id:this.apiTokenId})
    },
    //重置
    newclickFun(){
      this.value= '',
      this.data= ''
    },
  },
  created() {
    this.getpeopleType()
    this.getApiToken()
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
