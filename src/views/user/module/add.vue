<template>
  <div class="add">
    <p><input v-model="username" type="text" placeholder="请输入用户名" @change="userChangeFn"></p>
    <p><input v-model="password" type="password" placeholder="请输入密码" @change="passwordFn"></p>
    <!-- 身份下拉框 -->
    <el-select v-model="value" placeholder="请选择身份id">
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
        <el-button type="primary" class="sure" @click="sureClickFn">确定</el-button>
        <el-button type="info" class="newkong" @click="newvalueFn">重置</el-button>
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

      username: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      peopleType: state => state.usermenage.peopleType
    })
  },
  methods: {
    ...mapActions({
      getpeopleType: 'usermenage/getpeopleType',
      getuserList: 'usermenage/getuserList'
    }),
    // 确定
    sureClickFn() {
      const obj = {
        user_name: this.username,
        user_pwd: this.password,
        identity_id: this.value
      }
      this.getuserList(obj)
    },
    // 密码
    passwordFn(e) {
      const dat = /^[A-za-z0-9]{6,18}!$/
      const yut = dat.test(e.target.value)
      if (yut) {
        this.password = e.target.value
      } else {
        alert('密码格式不正确')
      }
    },
    // 用户名
    userChangeFn(e) {
      const user = /[a-z0-9]$/
      const usernam = user.test(e.target.value)

      if (usernam) {
        this.username = e.target.value
      } else {
        alert('用户名格式不正确')
      }
    },
    // 重置
    newvalueFn() {
      this.value = '',
      this.username = '',
      this.password = ''
    }
  },
  created() {
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
