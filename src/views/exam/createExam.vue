<template>
  <div>
    <div v-for="(item,index) in addList" :key="index">
      {{item}}
    </div>
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
  },
  created() {
    this.getExam()
  }
};

</script>

<style>

</style>