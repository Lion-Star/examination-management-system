<template>
  <div>
      <input type="file" @click="importExcel"/>
    <el-upload
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button @click="exportExcel">导出Excel</el-button>
    <table id="table"></table>
    <el-table :data="computeData">
      <el-table-column prop="student_id" label="student_id" width="180"></el-table-column>
      <el-table-column prop="student_name" label="student_name" width="180"></el-table-column>
      <el-table-column prop="room_text" label="room_text"></el-table-column>
      <el-table-column prop="grade_name" label="grade_name"></el-table-column>
      <el-table-column prop="subject_text" label="subject_text"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="e=>{

        }"
      :current-page.sync="currentPage"
      :page-sizes="[10,20,30,40]"
      :page-size.sync="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="data.length"
    ></el-pagination>
  </div>
</template>

<script>
import request from '@/utils/request.js';
import XLSX from 'xlsx'
export default {
    data(){
        return{
            currentPage:1,
            pageSize:20,
            data:[]
        }
    },
    computed:{
computeData(){
    return this.data.slice((this.currentPage-1)*pageSize,this.currentPage*pageSize)
}
    },
    methods:{
        handleSizeChange(e){
            this.pageSize=e
        },
        importExcel(e){
            let file=e.target.files[0]
            var reader=new FileReader();
            reader.onload=(e)=>{
                var data=new Uint8Array(e.target.result);
                var workbook=XLSX.read(data,{type:'array'});
                var worksheet=workbook.Sheets[workbook.SheetNames[0]];
                var json=XLSX.utils.sheet_add_json(worksheet);
                var container=document.getElementById('table');
                container.innerHTML=XLSX.utils.sheet_to_html(worksheet)
                this.data=json;
            }
        },
        exportExcel(){
            var wb=XLSX.utils.book_new();
            var ws=XLSX.utils.json_to_sheet(this.data,{header:Object.keys(this.data[0])})
            XLSX.utils.book_append_sheet(wb,ws,'student1')
             XLSX.utils.book_append_sheet(wb,ws,'student2')
              XLSX.utils.book_append_sheet(wb,ws,'student3')
            XLSX.writeFile(wb,'')
        }
    },
   async created(){
       let res=await request('/manger/student')
       console.log('res...',res)
       this.data=res.data;
   }
}
</script>

<style>
</style>