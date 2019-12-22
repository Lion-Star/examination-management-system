<template>
  <div class="box">
    <div class="box1">
      <p>添加考试</p>
    </div>
    <div class="box2">
      <div class="box2-list1">
        <p>
          <span>*</span>
          <span>试卷名称:</span>
        </p>
        <p>
          <el-select v-model="value" placeholder="请选择" style="width:400px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </p>
      </div>
      <div class="box2-list2">
        <p>
          <span>*</span>
          <span>选择考题类型:</span>
        </p>
        <p>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </p>
      </div>
      <div class="box2-list3">
        <p>
          <span>*</span>
          <span>选择考题类型:</span>
        </p>
        <p>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </p>
      </div>
      <div class="box2-list4">
        <p>
          <span>*</span>
          <span>设置题量:</span>
        </p>
        <p>
          <el-input v-model="input" placeholder></el-input>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      input: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  computed: {
    ...mapState({
      addList: state => state.addExam.addList
    })
  },
  methods: {
    ...mapActions({
      getExam: "addExam/getExam"
    })
  },
  created() {
    // this.getExam({subject_id:})
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;

  height: calc(100vh - 84px);
}
.box1 p {
  margin: 20px;
  margin-bottom: 25px;
  font-size: 20px;
}
.box2 {
  width: 95%;
  height: 100%;
  // margin: auto;
  background: #fff;
  margin-left: 15px;
  border-radius: 2%;
}
.box2-list1 p {
  padding-top: 40px;
  padding-left: 30px;
}
.box2-list1 p span:nth-child(1) {
  color: red;

  position: absolute;
  top: 110px;
  left: 40px;
  font-size: 20px;
}
.box2-list1 p span:nth-child(2) {
  margin-left: 10px;
  margin-top: 10px;
}
.box2-list1 p:nth-child(2) {
  padding-top: 10px;
  width: 120%;
  z-index: 999999999999;
}
.box2-list2 p {
  padding-top: 40px;
  padding-left: 30px;
}
.box2-list2 p span:nth-child(1) {
  color: red;

  position: absolute;
  top: 250px;
  left: 40px;
  font-size: 20px;
}
.box2-list2 p span:nth-child(2) {
  margin-left: 10px;
  margin-top: 10px;
}
.box2-list2 p:nth-child(2) {
  padding-top: 10px;
  width: 30%;
}
.box2-list3 p {
  padding-top: 40px;
  padding-left: 30px;
}
.box2-list3 p span:nth-child(1) {
  color: red;

  position: absolute;
  top: 388px;
  left: 40px;
  font-size: 20px;
}
.box2-list3 p span:nth-child(2) {
  margin-left: 10px;
  margin-top: 10px;
}
.box2-list3 p:nth-child(2) {
  padding-top: 10px;
  width: 30%;
}
.box2-list4 p {
  padding-top: 40px;
  padding-left: 30px;
}
.box2-list4 p span:nth-child(1) {
  color: red;

  position: absolute;
  top: 530px;
  left: 40px;
  font-size: 20px;
}
.box2-list4 p span:nth-child(2) {
  margin-left: 10px;
  margin-top: 10px;
}
.box2-list4 p:nth-child(2) {
  padding-top: 10px;
  width: 20%;
}
</style>