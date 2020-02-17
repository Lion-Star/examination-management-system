<template>
  <div>
    <!-- <div v-for="(item,index) in addList" :key="index">
      {{item}}
    </div> -->
    <h1 class="title">{{addList.title}}</h1>
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
   detele(e){
      // this.getExam()
      e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
     console.log(e.target.parentNode.parentNode)
   }
  },
  created() {
    
  }
};

</script>

<style lang="scss" scoped>
.box {
  width: 100%;

  height: calc(100vh - 40px);
}
.createExam{
  width: 120px;
  height: 50px;
  background: skyblue;
  color: #fff;
  border: none;
  // position: absolute;
  margin-left:650px ;
  margin-top: 500px;
 
}
.detele{
 
 position: absolute;
 top: 250px;
 right: 100px;
}
.div{
  margin: auto;
  border: 1px solid #000;
 margin-top: 30px;
  width: 800px;
  height: 300px;
  position: relative;
}
.title{
 margin-left: 650px;
}
</style>