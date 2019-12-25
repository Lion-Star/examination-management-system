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
          <el-input v-model="subject_id" placeholder style="width:400px"></el-input>
        </p>
      </div>
      <div class="box2-list2">
        <p>
          <span>*</span>
          <span>选择考题类型:</span>
        </p>
        <p>
          <el-select v-if="addType" v-model="exam_id" placeholder="请选择">
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
          <el-select v-model="title" placeholder="请选择">
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
         <el-input-number v-model="number" controls-position="right" @change="handleChange" :min="1" :max="10" style="width:120px"></el-input-number>
        </p>
      </div>
      <div class="last">
        <p>
          <span>考试时间</span>
        </p>
        <div class="box2-list5">
          <div class="block">
    
    <el-date-picker
      v-model="start_time"
      type="date"
      placeholder="开始日期"
      value-format="timestamp"
      >
    </el-date-picker>
  </div>
  <div class="block">
    
    <el-date-picker
      v-model="end_time"
      type="date"
      placeholder="结束日期"
      value-format="timestamp"
      >
    </el-date-picker>
  </div>
  </div>
        </div>
        <p class="btn">
        <button @click="create()">创建考试</button>
      </p>
      </div>
      
    </div>
  
</template>

<script>
import { mapActions, mapState } from "vuex";
import { getType } from "../../api/exam";
export default {
  data() {
    return {
      subject_id:"",
      exam_id:"",
      title:"",
      number:"",
      start_time:"",
      end_time:""
    };
  },
  computed: {
    ...mapState({
      //获取考试列表
      addList: state => state.addExam.addList,
      //获取考试类型
      addType: state => state.addType.addType,
      //获取课程
      addClass: state => state.addClass.addClass
    })
  },
  methods: {
    ...mapActions({
      getExam: "addExam/getExam",
      getType: "addType/getType",
      getClass: "addClass/getClass"
    }),
     handleChange(value) {
        console.log(value);
      },
      create(){
        let content={
          subject_id:this.subject_id,
          exam_id:this.exam_id,
          title:this.title,
          number:this.number,
          start_time:this.start_time,
          end_time:this.end_time
        }
        // console.log(content)
        this.getExam(content)
       if(this.subject_id!=""&&this.exam_id!=""&&this.title!=""&&this.number!=""&&this.start_time!=""&&this.end_time!=""){
         this.$router.push('./createExam')
       }
        // console.log(111)
      }
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
.box2-list5 {
  display: flex;
  padding-left: 20px;
}
.block {
  margin-right: 30px;
}
.last p span {
  margin-left: 25px;
}
.btn {
  margin-left: 20px;
}
.btn button {
  width: 130px;
  background: skyblue;
  color: #fff;
  border: none;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>