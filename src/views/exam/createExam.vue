<template>
  <div>
    <!-- <div v-for="(item,index) in addList" :key="index">
      {{item}}
    </div> -->
    <h1 class="title">{{addList.title}}</h1>
      <div class="div" v-for="(item,index) in addList.questions" :key="index">
          <p class="num">{{index+1}} : {{item.title}}</p>
          
          <div>
            <!-- {{item.questions_stem}} -->
            <MarkdownEditor v-model="item.questions_stem" height="800px" width="800px" />
          </div>
         <p><button @click="detele" class="detele">删除</button></p>
      </div>
      <div  ><button class="createExam" @click="examList">创建试卷</button></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MarkdownEditor from "@/components/MarkdownEditor"
export default {
  components:{
     MarkdownEditor
  },
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
 top: 500px;
 right: 100px;
}
.div{
  margin: auto;
  // border: 1px solid #000;
//  margin: 150px 0;
  width: 1600px;
  // height: 500px;
  // padding: 40px 20px;
  position: relative;
}
.title{
 margin-left: 650px;
}
.num{
  margin-bottom: 10px;
}
</style>