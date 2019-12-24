<template>
  <div class="content">
      <el-table
        :data="caredData"
        style="width: 100%"
      >
        <el-table-column
          prop="identity_text"
          label="身份名称"
          width="180"
        />
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="10"
      />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
computed:{
  ...mapState({
    caredData:state=>state.usershow.caredData
  })
},
methods:{
  ...mapActions({
    getcaredData:"usershow/getcaredData"
  })
},
created(){
  this.getcaredData()
  }
}
</script>

<style>

</style>