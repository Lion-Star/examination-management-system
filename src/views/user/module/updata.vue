<template>
  <div class="updatas">
    <!-- 用户名下拉框 -->
    <el-select v-model="value" placeholder="请选择身份id">
      <el-option
        v-for="item in userIDList"
        :key="item.user_id"
        :label="item.user_name"
        :value="item.user_id"
      />

    </el-select>
    <p><input v-model="username" type="text" placeholder="请输入用户名"></p>
    <p><input v-model="password" type="password" placeholder="请输入密码"></p>
    <!-- 身份下拉框 -->
    <el-select v-model="data" placeholder="请选择身份id">
      <el-option
        v-for="item in peopleType.data"
        :key="item.identity_id"
        :label="item.identity_text"
        :value="item.identity_id"
      />
    </el-select>
    <!-- 确定、重置按钮 -->
    <div class="butt">
      <el-row>
        <el-button type="primary" class="sure" @click="sureclickFn">确定</el-button>
        <el-button type="info" class="newkong" @click="newclickFn">重置</el-button>
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
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      peopleType: state => state.usermenage.peopleType,
      updataList: state => state.updatauser.updataList,
      userIDList: state => state.usermenage.userIDList.data,
      userInfoList: state => state.updatauser.userInfoList
    })
  },
  methods: {
    ...mapActions({
      getpeopleType: 'usermenage/getpeopleType',
      getupdataList: 'updatauser/getupdataList',
      getuserIDList: 'usermenage/getuserIDList',
      getuserInfoList: 'updatauser/getuserInfoList'
    }),
    // 重置
    newclickFn() {
      this.value = '',
      this.data = '',
      this.username = '',
      this.password = '',
      this.userInfoList.avatar = ''
    },
    // 确定
    sureclickFn() {
      const obj = {
        user_id: this.value,
        user_name: this.username,
        user_pwd: this.password,
        identity_id: this.data,
        avatar: this.userInfoList.avatar
      }
      this.getupdataList(obj)
    }
  },
  created() {
    this.getuserInfoList()
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
