<template>
  <div>
    <div class="div">
      <div class="box">
        <p>待批班级</p>
        <div class="box1">
          <el-table :data="tableData4" style="width: 100%" max-height="250">
            <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="province" label="省份" width="120"></el-table-column>
            <el-table-column prop="city" label="市区" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" width="300"></el-table-column>
            <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData4)"
                  type="text"
                  size="small"
                >移除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.div {
  width: 100%;

  height: calc(100vh - 84px);
}
.box {
  width: 100%;
  height: 100%;
}
.box p {
  margin-top: 40px;
  margin-left: 40px;
  font-size: 20px;
}
.box1 {
  width: 90%;
  height: 80%;
  background: #fff;
  margin: auto;
  border-radius: 15px;
}
</style>