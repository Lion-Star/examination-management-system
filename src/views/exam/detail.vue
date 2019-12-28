<template>
  <div class="big-box">
    <div class="box" v-for="(item,index) in addDetail.questions" :key="index">
       <p class="num">{{index+1}} : {{item.title}}</p>
      
      <!-- <p>{{item.questions_stem}}</p> -->
      <!-- <p>王琪</p> -->
      <MarkdownEditor v-model="item.questions_stem" height="500px" />
    </div>
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
      addDetail: state => state.addDetail.addDetail
    })
  },
  methods: {
    ...mapActions({
      getDetail: "addDetail/getDetail",
    }),
  },
  created() {
    console.log(this.$route.query.id);
    
    this.getDetail(this.$route.query.id)
  }
}
</script>

<style lang="scss" scoped>
.big-box{
  width: 1400px;
  margin: auto;
}
</style>