<template>
  <div>
    <div class="box" v-for="(item,index) in addDetail.questions" :key="index">
      <p>{{item.title}}</p>
      <p>{{item.questions_stem}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
computed: {
    ...mapState({
      addDetail: state => state.addDetail.addDetail,
      
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

<style>

</style>