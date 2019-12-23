<template>
  <div class="setapi">
    <div class="box">
      <p>给身份设置api接口权限</p>
    </div>
    <el-select v-model="value" placeholder="请选择身份id" class="select">
      <el-option
        v-for="item in peopleType.data"
        :key="item.identity_id"
        :label="item.identity_text"
        :value="item.identity_text"
      />
    </el-select>
    <p>
      <el-select v-model="data" placeholder="请选api接口权限" class="select">
        <el-option
          v-for="item in apiTokenList.data"
          :key="item.api_authority_id"
          :label="item.api_authority_text"
          :value="item.api_authority_text"
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
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      value: '',
      data: ''
    }
  },
  computed: {
    ...mapState({
      peopleType: state => state.usermenage.peopleType,
      apiTokenList: state => state.usermenage.apiTokenList
    })

  },
  methods: {
    ...mapActions({
      getpeopleType: 'usermenage/getpeopleType',
      getApiToken: 'usermenage/getApiToken'
    })
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
