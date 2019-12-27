<template>
<div class="Detail">
    <h2>试题详情</h2>
    <div class="d-box">
        <div class="question">
            <div class="author">
                <span>出题人：{{item.user_name}}</span>
            </div>
            <h3>题目信息</h3>
            <div class="tag">
                <p>
                    <el-tag>{{ item.questions_type_text}}</el-tag>
                    <el-tag type="info">{{ item.subject_text}}</el-tag>
                    <el-tag type="warning">{{item.exam_name}}</el-tag>
                </p>
            </div>
            <h4>{{item.title}}</h4>
            <div class="content">
                <markdown-editor v-model="item.questions_stem" height="800px" />
            </div>
        </div>
        <div class="answer">
            <h3>答案信息：</h3>
            <markdown-editor v-model="item.questions_answer" height="910px" />
        </div>
    </div>
</div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
import {
    mapState,
    mapMutations,
    mapActions
} from "vuex";
export default {
    data() {
        return {
            item: this.$route.query
        };
    },
    computed: {
        ...mapState({
            ExamTypeList: state => state.TestManagement.ExamTypeList
        })
    },
    components: {
        MarkdownEditor
    },
    created() {
        this.getExamType();
        console.log(item.questions_stem);
    },
    methods: {
        ...mapActions({
            getExamType: "TestManagement/getExamType",
            insertQuestionsType: "TestManagement/insertQuestionsType"
        }),
        open3() {
            this.$prompt("请输入类型名称", "创建新类型", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消"
                })
                .then(({
                    value
                }) => {
                    let params = {
                        text: value,
                        sort: this.ExamTypeList.length + 1
                    };
                    this.insertQuestionsType(params);
                    this.$message({
                        type: "success",
                        message: "添加成功"
                    });
                    this.getExamType();
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "添加失败"
                    });
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.Detail {
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

.question {
    width: 70%;
    background: rgb(255, 255, 255);
    padding: 24px;
    margin: 0px 0px 20px;
    border-radius: 10px;
}

.answer {
    width: 28%;
    background: #fff;
    border-radius: 10px;
    padding: 24px;
    margin: 0px 0px 20px;
}

.tableList {
    margin-top: 30px;
}

.author {
    margin-bottom: 20px;

    span {
        color: #555;
    }
}

h3 {
    font-weight: 500;
    font-size: 1.17em;
}

h4 {
    font-weight: 500;
    font-size: 1em;
}

.tag {
    margin-top: 20px;
    margin-bottom: 20px;
}

.content {
    font-size: 14px;
}

.d-box {
    display: flex;
    justify-content: space-between;
}

.pre {
    display: flex;
    flex-wrap: wrap;
}
</style>
