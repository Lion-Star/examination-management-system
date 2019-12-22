<template>
<div class="TestClassification">
    <h2>查看试题</h2>
    <div class="search-modules">
        <div class="classid">
            <b>课程类型:</b>
            <div ref="check" class="noselect">
                <span @click="clickAll()" :class="{active:allShow}">all</span>
                <span v-for="(item,index) in ClassList" :key="index" :class="{active:item.show}" @click="changecur(item)">{{item.subject_text}}</span>
            </div>
        </div>
        <div class="test-select">
            <div>
                <p>
                    请选择考试类型：
                    <el-select v-model="value" clearable placeholder="请选择">
                        <el-option v-for="item in ExamList" :key="item.questions_type_text" :value="item.subject_text"></el-option>
                    </el-select>
                </p>
            </div>

            <div>
                <p>
                    请选择题目类型：
                    <el-select v-model="value1" clearable placeholder="请选择">
                        <el-option v-for="item in ExamTypeList" :key="item.value" :value="item.questions_type_text"></el-option>
                    </el-select>
                </p>
            </div>

            <div>
                <el-button type="primary" icon="el-icon-search">查询</el-button>
            </div>
        </div>
    </div>
    <div class="allTest">
        <el-table :data="AllTextList" style="width: 100%" :header-cell-style="{display:'none'}">
            <el-table-column label="类型ID">
                <template slot-scope="scope" style="padding-left: 100px">
                    <p>{{ scope.row.title}}</p>
                    <p>
                        <el-tag>{{ scope.row.questions_type_text}}</el-tag>
                        <el-tag type="info">{{ scope.row.subject_text}}</el-tag>
                        <el-tag type="warning">{{scope.row.exam_name}}</el-tag>
                    </p>
                    <p>
                        <el-tag type="success">{{scope.row.user_name}}发布</el-tag>
                    </p>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="100">
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
            value: "", //考试类型
            value1: "", //题目类型
            allShow: false
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
            getExamType: "TestManagement/getExamType"
        }),
        handleEdit(index, row) {
            console.log(index, row);
        },
        changecur(item) {
            this.ClassList.forEach((it, index) => {
                if (it == item) {
                    if (this.allShow) {
                        item.show = true;
                        this.allShow = false;
                    } else {
                        item.show = !item.show;
                    }
                } else {
                    it.show = false
                }
            })
        },
        clickAll() {
            this.allShow = !this.allShow
            this.ClassList.forEach(item => {
                item.show = this.allShow
            })
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
    padding-left: 6%;

    span {
        line-height: 40px;
        font-size: 12px;
        padding: 10px 10px;
        margin: 4px;
    }
}

.test-select {
    display: flex;
    margin-top: 30px;

    >div {
        padding-right: 50px;

        button {
            margin-top: 15px;
        }
    }
}

.classid {
    display: flex;

    b {
        margin-top: 5px;
        padding-right: 10px;
        min-width: 80px;
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
</style>
