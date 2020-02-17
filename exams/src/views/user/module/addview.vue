<template>
  <div class="addview">
    <div class="box">
      <p>添加试图接口权限</p>
    </div>
    <el-select v-model="value" placeholder="请选择已有视图" class="select" @change="changeID">
      <el-option
        v-for="item in addViewList"
        :key="item.view_authority_id"
        :label="item.view_authority_text"
        :value="item.view_authority_id"
      />
    </el-select>
    <div class="butt">
      <el-row>
        <el-button type="primary" class="sure" @click="sureClickFn">确定</el-button>
        <el-button type="info" class="newkong" @click="newClickFn">重置</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      value: "",
      id: ""
    };
  },
  computed: {
    ...mapState({
      addViewList: state => state.usermenage.addViewList,
       addViewkou:state=>state.usermenage.addViewkou
    })
  },
  methods: {
    ...mapActions({
      getAddViewList: "usermenage/getAddViewList",
      getAddViewkou:"usermenage/getAddViewkou"
    }),
     changeID(item){
      this.id=item
    },
    //确定
    sureClickFn() {
      this.getAddViewkou({view_authority_text:this.value,view_id:this.id})
    },
    //重置
   newClickFn(){
     this.value='',
     this.id=""
   }
  },
  created() {
    this.getAddViewList();
  }
};
</script>

<style scoped lang="scss">
.addview {
  width: 33%;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.addview .select {
  margin: 5px 0 5px 10px;
}
.addview .butt {
  height: 80px;
  line-height: 80px;
  margin-left: 10px;
}
.addview .butt .sure {
  width: 100px;
}
.addview .box {
  margin-left: 10px;
  height: 50px;
}
.addview .box p {
  width: 115px;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  text-align: center;
  background: #fff;
  color: rgb(0, 140, 255);
  border: 1px solid rgb(0, 140, 255);
  font-weight: 700;
  margin-top: 10px;
}
</style>
