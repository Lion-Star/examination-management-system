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
          <el-input v-model="input" placeholder style="width:400px"></el-input>
        </p>
      </div>
      <div class="box2-list2">
        <p>
          <span>*</span>
          <span>选择考题类型:</span>
        </p>
        <p>
          <el-select v-if="addType" v-model="type" placeholder="请选择">
            <el-option
              v-for="item in addType"
              :key="item.value"
              :label="item.label"
              :value="item.exam_name"
            ></el-option>
          </el-select>
        </p>
      </div>
      <div class="box2-list3">
        <p>
          <span>*</span>
          <span>选择课程:</span>
        </p>
        <p>
          <el-select v-model="classify" placeholder="请选择">
            <el-option
              v-for="item in addClass"
              :key="item.value"
              :label="item.label"
              :value="item.subject_text"
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
          <el-input v-model="input" placeholder style="width:150px"></el-input>
        </p>
      </div>
      <div class="last">
        <p>
          <span>考试时间</span>
        </p>
        <div class="box2-list5">
          <div class="block">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
          <el-time-select
            v-model="value2"
            :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
            placeholder="选择时间"
          ></el-time-select>
        </div>
      </div>
      <p class="btn"><button>创建考试</button></p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { getType } from "../../api/exam";
export default {
  data() {
    return {
      input: "",
      name: "",
      type: "",
      classify: "",
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: "",
      value2:""
    };
  },
  computed: {
    ...mapState({
      addList: state => state.addExam.addList,
      addType: state => state.addType.addType,
      addClass: state => state.addClass.addClass
    })
  },
  methods: {
    ...mapActions({
      getExam: "addExam/getExam",
      getType: "addType/getType",
      getClass: "addClass/getClass"
    })
  },
  created() {
    this.getType(), this.getClass();
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;

  height: calc(100vh - 40px);
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
.box2-list5{
  display: flex;
 padding-left: 20px;
}
.block{
  margin-right: 30px;
}
.last p span{
  margin-left: 25px;
}
.btn{
  margin-left: 20px;
}
.btn button{
  width: 130px;
  background: skyblue;
  color: #fff;
  border: none;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>