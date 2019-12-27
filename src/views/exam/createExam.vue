<template>
  <div>
    <!-- <div v-for="(item,index) in addList" :key="index">
      {{item}}
    </div> -->
    <h1>{{addList.title}}</h1>
      <div class="div" v-for="(item,index) in addList.questions" :key="index">
          <p>{{index+1}}{{item.title}}</p>
          <div>
            {{item.questions_stem}}
          </div>
          <p><button @click="detele" class="detele">删除</button></p>
      </div>
      <div  ><button class="createExam" @click="examList">创建试卷</button></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
   computed: {
    ...mapState({
      //获取考试列表
      addList: state => state.addExam.addList,
    })
  },
  methods: {
    ...mapActions({
      getExam: "addExam/getExam"
     
    }),  
    examList(){
      this.$router.push('./ListExam')
    },
   
  },
  created() {
    // this.getExam()
  }
};

</script>

<style lang="scss" scoped>
.createExam{
  width: 120px;
  height: 50px;
  background: skyblue;
  color: #fff;
  border: none;
  position: absolute;
  left: 500px;
  top: 400px;
}
.detele{
  position: absolute;
  top: 200px;
  right: 100px;
}
</style>