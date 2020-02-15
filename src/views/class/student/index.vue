<template>
<el-container style="height:100%;">
    <input type="file" @change="importExcel">
    <el-button @click="exportEXcel">导出Excel</el-button>
    <el-header style="height:10%;display: flex;align-items: center;">
        <el-input v-model="studentName" placeholder="请输入学生姓名" size="mini" style="width:120px;fontSize:10px;"></el-input>
        <el-select v-model="roomValue" placeholder="教室名" size="mini" @change="setRoom" style="width:100px;fontSize:10px;marginLeft:15px">
            <el-option v-for="item in tableData" :key="item.room_text" :label="item.room_text" :value="item.room_text"></el-option>
        </el-select>
        <el-select v-model="gradeValue" placeholder="班级名" size="mini" @change="setGradeValue" style="width:80px;fontSize:10px;marginLeft:15px">
            <el-option v-for="item in tableData" :key="item.grade_name" :label="item.grade_name" :value="item.grade_name"></el-option>
        </el-select>
        <el-button type="primary" style="marginLeft:15px;height:25px;lineHeight:5px;fontSize:10px" @click="setSearch">搜索</el-button>
        <el-button type="primary" style="marginLeft:15px;height:25px;lineHeight:5px;fontSize:10px" @click="setReset">重置</el-button>
    </el-header>
    <el-main>
        <el-table :data="setStudentList" :header-cell-style="{background:'#f4f4f4',color:'#555',lineHeight:'30px',fontSize:'14px'}" style="width: 100%">
            <el-table-column label="姓名">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.student_name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="学号">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.student_id }}</span>
                </template>
            </el-table-column>
            <el-table-column label="班级">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.grade_name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="密码">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.student_pwd }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="[4, 6, 8, 10]" :page-size="4" layout="total, sizes, prev, pager, next, jumper" :total="studentList.length"></el-pagination>
        </div>
    </el-main>
</el-container>
</template>

<script>
import {
    mapState,
    mapActions,
    mapMutations
} from "vuex";
import XLSX from 'xlsx';

export default {
    computed: {
        ...mapState({
            setStudentList: state => state.class.setStudentList,
            tableData: state => state.class.tableData,
            studentList: state => state.class.studentList,
        })
    },
    data() {
        return {
            studentName: "", //输入的学生姓名
            currentPage1: 1,
            roomValue: "", //教室值
            gradeValue: "", //班级值
            studentName: "" //姓名
        };
    },
    methods: {
        ...mapActions({
            getStudent: "class/getStudent",
            gitGrade: "class/gitGrade",
            studentDelete: "class/studentDelete"
        }),

        ...mapMutations({
            setStudent: "class/setStudent", //教室名搜索
            setGradeValued: "class/setGradeValued", //班级搜索
            setSearched: "class/setSearched", //姓名搜索
            handleSize: "class/handleSize", //每页几条
            handleCurrent: "class/handleCurrent", //当前页
        }),

        //删除
        handleDelete(row) {
            if (confirm('是否删除这个学生数据')) {
                this.studentDelete({
                    student_id: row.student_id
                })
                this.getStudent();
            } else {
                alert("取消成功")
            }
        },

        //每页几条
        handleSizeChange(val) {
            this.handleSize(val)
        },

        //当前页
        handleCurrentChange(val) {
            this.handleCurrent(val)
        },

        //教室名搜索
        setRoom() {
            if (this.roomValue === "") {
                return;
            } else {
                this.setStudent(this.roomValue);
            }
        },

        //班级名搜索
        setGradeValue() {
            if (this.gradeValue === "") {
                return;
            } else {
                this.setGradeValued(this.gradeValue);
            }
        },

        //重置
        setReset() {
            this.roomValue = "", //教室值
                this.gradeValue = "", //班级值
                this.studentName = "" //姓名
        },

        //搜索
        setSearch() {
            this.setSearched(this.studentName)
        },
        importExcel() {
            let file = e.target.files[0];
            var reader = new FileReader();
            reader.onload = (e) => {
                var data = new Uint8Array(e.target.result);
                var workbook = XLSX.read(data, {
                    type: 'array'
                });
                console.log('workbook...', workbook);

                var worksheet = workbook.Sheets[workbook.SheetNames[0]];
                var json = XLSX.utils.sheet_to_json(worksheet);

                var container = document.getElementById('table');
                container.innerHTML = XLSX.utils.sheet_to_html(worksheet);

                console.log('json...', json);
                this.data = json;
                /* DO SOMETHING WITH workbook HERE */
            };
            reader.readAsArrayBuffer(file);
        },
        exportEXcel() {
            //生成一个空的workbooks
            var wb = XLSX.utils.book_new();
            // 创建worksheet
            var ws = XLSX.utils.json_to_sheet(this.studentList, {
                header: Object.keys(this.studentList[0])
            });
            // 通过worksheet生成workbooks
            XLSX.utils.book_append_sheet(wb, ws, 'student1')
            XLSX.writeFile(wb, '');
        }

    },
    created() {
        this.getStudent();
        this.gitGrade();
    }
};
</script>

<style lang="scss" scoped>
.el-header {
    display: flex;
    align-items: center;
}

.main-container {
    height: 100%;
}

.block {
    display: flex;
    flex-direction: row-reverse;
    padding: 15px 20px 15px 0;
}

.el-main {
    padding: 0 20px;
}
</style>
