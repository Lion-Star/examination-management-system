<template>
<div class="TestClassification">
    <h2>试题分类</h2>
    <div class="classifyTest">
        <el-button type="primary" @click="open3">+ 添加类型 </el-button>
        <div class="tableList">
            <el-table :data="ExamTypeList" style="width: 100%" :header-cell-style="{background:'#f4f4f4',color:'#555',lineHeight:'30px',fontSize:'14px'}">
                <el-table-column label="类型ID" width="660">
                    <template slot-scope="scope">
                        <i class="el-icon-star-off"></i>
                        <span style="margin-left: 10px">{{ scope.row.questions_type_id }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="类型名称" width="380">
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.questions_type_text }}</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                </el-table-column>
            </el-table>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapMutations,
    mapActions
} from 'vuex'
export default {
    computed: {
        ...mapState({
            ExamTypeList: state => state.TestManagement.ExamTypeList
        })
    },
    created() {
        this.getExamType()
    },
    methods: {
        ...mapActions({
            getExamType: "TestManagement/getExamType",
            insertQuestionsType: "TestManagement/insertQuestionsType",
        }),
        open3() {
            this.$prompt("请输入类型名称", '创建新类型', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({
                value
            }) => {
                let params = {
                    text: value,
                    sort: this.ExamTypeList.length + 1
                }
                this.insertQuestionsType(params)
                this.$message({
                    type: 'success',
                    message: '添加成功'
                });
                this.getExamType()
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '添加失败'
                });
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.TestClassification {
    height: 100%;
    padding: 0px 24px 24px;
    box-sizing: border-box;
    min-height: calc(100vh - 20vh - 20px);
}

h2 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.classifyTest {
    width: 100%;
    background: rgb(255, 255, 255);
    padding: 24px;
    margin: 0px 0px 20px;
    border-radius: 10px;
    min-height: calc(100vh - 20vh - 20px);
}

.tableList {
    margin-top: 30px;
}
</style>
