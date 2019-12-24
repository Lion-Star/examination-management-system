import { mapActions, mapState } from 'vuex';
<template>
       <div class="content">
         456789
      <!--<el-table
        :data="apiTokenList"
        style="width: 100%"
      >
        <el-table-column
          prop="user_name"
          label="用户名"
          width="180"
        />
        <el-table-column
          prop="user_pwd"
          label="密码"
          min-width="180"
        />
        <el-table-column
          prop="identity_text"
          label="身份"
        />
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="10"
      /> -->
    </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
  computed:{
    ...mapState({
      apiTokenList:state=>state.usershow.apiTokenList
    })
    
  },
  methods:{
    ...mapActions({
      getapiTokenList:"usershow/getapiTokenList"
    })
    
  },
  created(){
    this.getapiTokenList()
  }
}
</script>

<style scoped lang='scss'>

</style>