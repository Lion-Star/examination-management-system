<template>
<div class="TestManagement">
    <h2>添加试题</h2>
    <div class="test-box">
        <div class="test-title">
            <h3>题目信息</h3>
            <p>题干</p>
            <div class="iptCon">
                <el-input placeholder="请输入题目信息，不超过20个字" v-model="title" clearable>
                </el-input>
            </div>
        </div>

        <div class="editor-container">
            <el-tag class="tag-title">
                题目主题:
            </el-tag>
            <markdown-editor v-model="content" height="300px" />
        </div>

        <div class="test-select">
            <p>请选择考试类型：</p>
            <el-select v-model="Evalue" clearable placeholder="请选择" @change="examType">
                <el-option v-for="(item,index) in ExamList" :key="index" :label="item.exam_name" :value="item">
                </el-option>
            </el-select>

            <p>请选择课程类型：</p>
            <el-select v-model="Cvalue" clearable placeholder="请选择" @change="classType">
                <el-option v-for="(item,index) in ClassList" :key="index" :label="item.subject_text" :value="item">
                </el-option>
            </el-select>

            <p>请选择题目类型：</p>
            <el-select v-model="Qvalue" clearable placeholder="请选择" @change="questionType">
                <el-option v-for="(item,index) in ExamTypeList" :key="index" :label="item.questions_type_text" :value="item">
                </el-option>
            </el-select>
        </div>

        <div class="editor-container">
            <el-tag class="tag-title">
                答案信息:
            </el-tag>
            <markdown-editor v-model="answer" height="300px" />
        </div>

        <el-button type="primary" @click="submit">提交</el-button>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapMutations,
    mapActions
} from "vuex"
//引入组件库
import MarkdownEditor from '@/components/MarkdownEditor'
export default {
    data() {
        return {
            content: '',
            answer: '',
            title: '',
            Evalue: '',
            Cvalue: '',
            Qvalue: '',
            EID: "", //考试类型ID
            CID: "", //课程类型ID
            QID: "" //题目类型ID
        }
    },
    async created() {
        this.getUserInfo();
        await this.getClassList()
        await this.getExamList();
        await this.getExamType();
    },
    computed: {
        ...mapState({
            ClassList: state => state.TestManagement.ClassList,
            ExamTypeList: state => state.TestManagement.ExamTypeList,
            ExamList: state => state.TestManagement.ExamList,
            UserInfo: state => state.userinfo.UserInfo
        })
    },
    components: {
        MarkdownEditor
    },
    methods: {
        ...mapActions({
            getClassList: "TestManagement/getClassList",
            AddQuestions: "TestManagement/AddQuestions",
            getAllText: "TestManagement/getAllText",
            getExamList: "TestManagement/getExamList",
            getExamType: "TestManagement/getExamType",
            getUserInfo: "userinfo/getUserInfo"

        }),
        examType(item) {
            this.EID = item.exam_id
        },
        classType(item) {
            this.CID = item.subject_id
        },
        questionType(item) {
            this.QID = item.questions_type_text
        },
        submit() {
            this.$confirm('你确定要添加这道试题吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'info',
                center: true
            }).then(() => {
                let params = {
                    questions_type_id: this.QID,
                    questions_stem: this.content,
                    subject_id: this.CID,
                    exam_id: this.EID,
                    user_id: this.UserInfo.user_id,
                    questions_answer: this.answer,
                    title: this.title,
                }
                this.AddQuestions(params) //添加试题
                this.$message({
                    type: 'success',
                    message: '添加成功!'
                });
                this.content = '';
                this.answer = '';
                this.title = '';
                this.Evalue = '';
                this.Cvalue = '';
                this.Qvalue = '';
                this.EID = "";
                this.CID = "";
                this.QID = "";
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消添加！'
                });
            });

        }
    }
}
</script>

<style lang="scss" scoped>
.TestManagement {

    height: 100%;
    padding: 0px 24px 24px;
    box-sizing: border-box;
    min-height: calc(100vh - 84px);
}

.test-box {
    width: 100%;
    background: rgb(255, 255, 255);
    padding: 24px;
    margin: 0px 0px 20px;
    border-radius: 10px;
    min-height: calc(100vh - 84px);
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

h3 {
    font-weight: normal;
}

.test-select {
    margin-bottom: 35px;
}

.iptCon {
    width: 100%;
    margin-bottom: 35px;

    .el-input {
        max-width: 500px;
    }
}

.editor-container {
    margin-bottom: 35px;
}
</style>
