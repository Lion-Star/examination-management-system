<template>
<div class="TestManagement">
    <h2>添加试题</h2>
    <div class="test-box">
        <div class="test-title">
            <h3>题目信息</h3>
            <p>题干</p>
            <div class="iptCon">
                <el-input placeholder="请输入内容" v-model="input10" clearable>
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
            <el-select v-model="value4" clearable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>

            <p>请选择课程类型：</p>
            <el-select v-model="value4" clearable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>

            <p>请选择题目类型：</p>
            <el-select v-model="value4" clearable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>

        <div class="editor-container">
            <el-tag class="tag-title">
                答案信息:
            </el-tag>
            <markdown-editor v-model="content1" height="300px" />
        </div>

        <el-button type="primary">提交</el-button>
    </div>
</div>
</template>

<script>
//引入组件库
import MarkdownEditor from '@/components/MarkdownEditor'
export default {
    data() {
        return {
            content: '',
            content1: '',
            input10: '',
            options: [{
                value: '选项1',
                label: '周考1'
            }, {
                value: '选项2',
                label: '周考2'
            }, {
                value: '选项3',
                label: '周考3'
            }, {
                value: '选项4',
                label: '月考'
            }],
            value4: ''
        }
    },
    components: {
        MarkdownEditor
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
