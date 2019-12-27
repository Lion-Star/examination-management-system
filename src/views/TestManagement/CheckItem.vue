<template>
<div class="TestClassification">
    <h2>查看试题</h2>
    <div class="search-modules">
        <div class="classid">
            <b>课程类型：</b>
            <div class="noselect">
                <span @click="clickAll" :class="{active:allShow}">All</span>
                <span v-for="(item,index) in ClassList" :key="index" :class="{active:item.show}" @click="changecur(item)">{{item.subject_text}}</span>
            </div>
        </div>
        <div class="test-select">
            <div>
                <p>
                    请选择考试类型：
                    <el-select v-model="Evalue" clearable placeholder="请选择" @change="examType">
                        <el-option v-for="(item,index) in ExamList" :key="index" :label="item.exam_name" :value="item"></el-option>
                    </el-select>
                </p>
            </div>

            <div>
                <p>
                    请选择题目类型：
                    <el-select v-model="Qvalue" clearable placeholder="请选择" @change="QuestionType">
                        <el-option v-for="(item,index) in ExamTypeList" :key="index" :label="item.questions_type_text" :value="item"></el-option>
                    </el-select>
                </p>
            </div>

            <div>
                <el-button type="primary" icon="el-icon-search" @click="search">查询</el-button>
            </div>
        </div>
    </div>
    <div class="allTest">
        <el-table :data="AllTextList" style="width: 100%" :header-cell-style="{display:'none'}" @row-click.self="detail">
            <el-table-column>
                <template slot-scope="scope" style="padding-left: 100px">
                    <p>{{scope.row.title}}</p>
                    <p>
                        <el-tag>{{ scope.row.questions_type_text}}</el-tag>
                        <el-tag type="info">{{scope.row.subject_text}}</el-tag>
                        <el-tag type="warning">{{scope.row.exam_name}}</el-tag>
                    </p>
                    <p>
                        <el-tag type="success">{{scope.row.user_name}}发布</el-tag>
                    </p>
                </template>
            </el-table-column>
            <el-table-column width="100">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapMutations,
    mapActions
} from "vuex";

export default {
    data() {
        return {
            cur: 0,
            Evalue: "", //考试类型
            Qvalue: "", //题目类型
            allShow: false, //全选
            subject_id: "", //课程id
            EID: "",
            QID: ""
        };
    },
    computed: {
        ...mapState({
            AllTextList: state => state.TestManagement.AllTextList,
            ClassList: state => state.TestManagement.ClassList,
            ExamTypeList: state => state.TestManagement.ExamTypeList,
            ExamList: state => state.TestManagement.ExamList
        })
    },
    async created() {
        this.getClassList();
        this.getAllText();
        this.getExamList();
        this.getExamType();
    },
    methods: {
        ...mapActions({
            getAllText: "TestManagement/getAllText",
            getClassList: "TestManagement/getClassList",
            getExamList: "TestManagement/getExamList",
            getExamType: "TestManagement/getExamType",
            searchQuestion: "TestManagement/searchQuestion"
        }),
        handleEdit(index, row) {
            console.log(index, row);
        },
        //单选
        changecur(item) {
            this.ClassList.forEach((it, index) => {
                if (it == item) {
                    if (this.allShow) {
                        item.show = true;
                        this.allShow = false;
                    } else {
                        item.show = !item.show;
                    }
                    this.subject_id = item.subject_id;
                } else {
                    it.show = false;
                }
            });
        },
        //全选
        clickAll() {
            this.allShow = !this.allShow;
            this.ClassList.forEach(item => {
                item.show = this.allShow;
            });
        },
        //选择考试类型
        examType(item) {
            this.EID = item.exam_id;
            this.Evalue = item.exam_name;
        },
        //选择题目类型
        QuestionType(item) {
            this.QID = item.questions_type_id;
            this.Qvalue = item.questions_type_text;
        },
        search() {
            let params = {
                questions_type_id: this.QID,
                subject_id: this.subject_id,
                exam_id: this.EID
            };
            if (
                Object.values(params).some(item => {
                    return item != "";
                })
            ) {
                this.searchQuestion(params);
            }
        },
        detail(row) {
            this.$router.push({
                path: "/TestManagement/Detail",
                query: row
            });
        },
        handleEdit(a, b) {
            console.log(a, b);
            this.$router.push({
                path: "/TestManagement/EditItem",
                query: b
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.TestClassification {
    height: 100%;
    padding: 0px 24px 24px;
    box-sizing: border-box;
    min-height: calc(100vh - 20vh - 20px);
}

h2 {
    padding: 20px 10px;
    margin-top: 10px;
    font-weight: normal;
}

.tableList {
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

.search-modules {
    background: rgb(255, 255, 255);
    padding: 20px;
    margin: 0px 0px 10px;
    border-radius: 10px;
    padding-left: 2%;

    span {
        line-height: 40px;
        font-size: 12px;
        padding: 10px 10px;
        margin: 4px;
    }
}

.test-select {
    display: flex;

    >div {
        padding-right: 50px;

        p {
            display: flex;
            line-height: 68px;
        }

        button {
            margin-top: 32px;
        }
    }
}

.classid {
    display: flex;

    b {
        margin-top: 12px;
        padding-right: 10px;
        min-width: 90px;
        font-weight: normal;
    }
}

.active /deep/ {
    background: #09f;
    color: #fff;
}

span {
    cursor: pointer;
}

.noselect {
    -webkit-touch-callout: none;
    /* iOS Safari */

    -webkit-user-select: none;
    /* Chrome/Safari/Opera */

    -khtml-user-select: none;
    /* Konqueror */

    -moz-user-select: none;
    /* Firefox */

    -ms-user-select: none;
    /* Internet Explorer/Edge */

    user-select: none;
    /* Non-prefixed version, currently

not supported by any browser */
}

.el-table {
    padding: 0 15px;
}
</style>
