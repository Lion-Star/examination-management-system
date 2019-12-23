<template>
  <div>
    <div class="box">
      <div class="box1">
        <div class="box1-list1">
          <p>考试类型:</p>
          <p>
            <el-select v-model="Type" placeholder="请选择">
              <el-option
                v-for="item in addType"
                :key="item.value"
                :label="item.label"
                :value="item.exam_name"
              ></el-option>
            </el-select>
          </p>
        </div>
        <div class="box1-list2">
          <p>课程:</p>
          <p>
            <el-select v-model="Class" placeholder="请选择">
              <el-option
                v-for="item in addClass"
                :key="item.value"
                :label="item.label"
                :value="item.subject_text"
              ></el-option>
            </el-select>
          </p>
        </div>
        <div class="box1-list3">
          <p>
            <el-button type="primary" style="width:120px" icon="search">查询</el-button>
          </p>
        </div>
      </div>
      <div class="box2">
        <div class="box2-little">
          <p>试卷列表</p>
          <div class="box2-list">
            <p>
              <span>
                <el-button plain style="width:60px">全部</el-button>
              </span>
              <span>
                <el-button plain style="width:80px">进行中</el-button>
              </span>
              <span>
                <el-button plain style="width:80px">已完成</el-button>
              </span>
            </p>
          </div>
        </div>
        <div class="box2-big">
          <el-table :data="List" style="width: 100%" max-height="250">
            <el-table-column fixed prop="title" label="试卷信息" width="330"></el-table-column>
            <el-table-column prop="grade_name" label="班级" width="230"></el-table-column>
            <el-table-column prop="user_name" label="创建人" width="230"></el-table-column>
            <el-table-column prop="start_time" label="开始时间" width="230"></el-table-column>
            <el-table-column prop="end_time" label="结束时间" width="230"></el-table-column>

            <el-table-column label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData4)"
                  type="text"
                  size="small"
                >详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      Type:"",
      Class:""
      // tableData4: []
    };
  },
  computed: {
    ...mapState({
      List: state => state.examList.List,
       addType: state => state.addType.addType,
        addClass: state => state.addClass.addClass
    })
  },
  methods: {
    ...mapActions({
      getList: "examList/getList",
       getType: "addType/getType",
       getClass: "addClass/getClass"
    })
  },
  created() {
    this.getList(),
    this.getType(),
    this.getClass();
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;

  height: calc(100vh - 84px);
}
.box1 {
  width: 95%;
  height: 30%;
  background: #fff;
  border-radius: 15px;
  margin: auto;
  display: flex;
}
.box1-list1 {
  padding: 25px;
  display: flex;
}
.box1-list1 p:nth-child(1) {
  padding-top: 10px;
}
.box1-list1 p:nth-child(2) {
  margin-left: 15px;
}
.box1-list2 {
  margin-left: 50px;
  display: flex;
  margin-top: 25px;
}
.box1-list2 p:nth-child(1) {
  padding-right: 10px;
  padding-top: 10px;
}
.box1-list3 p {
  margin-top: 42px;
  margin-left: 80px;
}
.box2 {
  width: 95%;
  height: 65%;

  background: #fff;
  margin: auto;
  margin-top: 30px;
  border-radius: 15px;
}
.box2 p {
  padding-top: 40px;
  padding-left: 25px;
}
.box2-little {
  display: flex;
}
.box2-list {
  margin-left: 1000px;
}
.box2-big {
  margin-left: 25px;
}
</style>