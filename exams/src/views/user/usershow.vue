<template>
  <div class="usershow">
    <div class="wrapper">
      <p>用户展示</p>
    </div>
    <div class="tab">
       <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="width:100%;">
        <el-tab-pane label="用户数据" name="first">
<div class="info">
  <p>用户展示</p>
</div>
          <el-table
        :data="usershowListed"
        style="width: 100%"
      >
        <el-table-column
          prop="user_name"
          label="用户名"
          width="180"
        />
        <el-table-column
          prop="user_pwd"
          label="密码"
          min-width="180"
        />
        <el-table-column
          prop="identity_text"
          label="身份"
        />
        
      </el-table>
           <el-pagination class="fenye"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="10"
              layout="total, prev, pager, next"
              :total="usershowList.length">
            </el-pagination>

        </el-tab-pane>
        <el-tab-pane label="身份数据" name="second" style="width:100%;">
<div class="info">
  <p>身份数据</p>
</div>
          <el-table
          :data="caredDataed"
          style="width: 100%"
        >
          <el-table-column
            prop="identity_text"
            label="身份名称"
            min-width="180"
          />
      </el-table>
            <el-pagination class="fenye"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="10"
              layout="total, prev, pager, next"
              :total="caredData.length">
            </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="api接口权限" name="third">
<div class="info">
  <p>api接口权限</p>
</div>
          <el-table
              :data="apiTokenListed"
              style="width: 100%"
            >
              <el-table-column
                prop="api_authority_text"
                label="api权限名称"
                min-width="180"
              />
              <el-table-column
                prop="api_authority_url"
                label="api权限url"
                min-width="180"
              />
              <el-table-column
                prop="api_authority_method"
                label="api权限方法"
              />
            </el-table>
            <el-pagination class="fenye"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="10"
              layout="total, prev, pager, next"
              :total="apiTokenList.length">
            </el-pagination>

        </el-tab-pane>
        <el-tab-pane label="身份和api接口关系" name="fourth">
<div class="info">
  <p>身份和api接口关系</p>
</div>
              <el-table
              :data="caredAndApiTokened"
              style="width: 100%"
            >
             <el-table-column
                prop="identity_text"
                label="身份名称"
                width="180"
              />
              <el-table-column
                prop="api_authority_text"
                label="api权限名称"
                min-width="180"
              />
              <el-table-column
                prop="api_authority_url"
                label="api权限url"
                min-width="180"
              />
              <el-table-column
                prop="api_authority_method"
                label="api权限方法"
              />
            </el-table>
             <el-pagination class="fenye"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="10"
              layout="total, prev, pager, next"
              :total="caredAndApiToken.length">
            </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="视图接口权限" name="fifve">
<div class="info">
  <p>视图接口权限</p>
</div>
          <el-table
              :data="viewTokenKoued"
              style="width: 100%"
            >
             <el-table-column
                prop="view_authority_text"
                label="视图权限名称"
                min-width="180"
              />
              <el-table-column
                prop="view_id"
                label="视图id"
                min-width="180"
              />
            </el-table>
             <el-pagination class="fenye"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="10"
              layout="total, prev, pager, next"
              :total="viewTokenKou.length">
            </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="身份和视图权限关系" name="six">
<div class="info">
  <p>身份和视图权限关系</p>
</div>
           <el-table
              :data="caredAndViewed"
              style="width: 100%"
            >
             <el-table-column
                prop="identity_text"
                label="身份"
                min-width="200"
              />
             <el-table-column
                prop="view_authority_text"
                label="视图名称"
                min-width="200"
              />
              <el-table-column
                prop="view_id"
                label="视图id"
                min-width="200"
              />
            </el-table>
            <el-pagination class="fenye"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="10"
              layout="total, prev, pager, next"
              :total="viewTokenKou.length">
            </el-pagination>
        </el-tab-pane>
      </el-tabs>
    </div>
  
  </div>
</template>

<script>

import {mapState,mapActions,mapMutations} from "vuex"
export default {
data() {
      return {
        activeName: 'first',
         currentPage1: 1,
      };
    },
    computed: {
    ...mapState({
        usershowList: state => state.usershow.usershowList,//用户数据
        usershowListed: state => state.usershow.usershowListed,//用户数据
        caredData:state=>state.usershow.caredData,//yuan身份数据
        caredDataed:state=>state.usershow.caredDataed,//身份数据
        apiTokenList:state=>state.usershow.apiTokenList,//api接口权限
        apiTokenListed:state=>state.usershow.apiTokenListed,//截取api接口权限
        caredAndApiToken:state=>state.usershow.caredAndApiToken,//原身份和api接口关系
        caredAndApiTokened:state=>state.usershow.caredAndApiTokened,//身份和api接口关系
        viewTokenKou:state=>state.usershow.viewTokenKou,//yuan视图接口权限
        viewTokenKoued:state=>state.usershow.viewTokenKoued,//视图接口权限
        caredAndView:state=>state.usershow.caredAndView,///身份和视图权限关系
         caredAndViewed:state=>state.usershow.caredAndViewed///身份和视图权限关系
      })
    }, 
    methods: {
      ...mapActions({
        getuserShow: 'usershow/getuserShow',//用户数据
        getcaredData:"usershow/getcaredData",//身份数据
        getapiTokenList:"usershow/getapiTokenList",//api接口权限
        getcaredAndApiToken:"usershow/getcaredAndApiToken",//身份和api接口关系
        getViewTokenKou:"usershow/getViewTokenKou",//视图接口权限
        getcaredAndView:"usershow/getcaredAndView"//身份和视图权限关系
    }),
    ...mapMutations({
        handleSize:"usershow/handleSize",
        handleCurrent:"usershow/handleCurrent",
    }),
    handleSizeChange(val) {
        this.handleSize(val)
      },
      handleCurrentChange(val) {
        this.handleCurrent(val)
      },
      handleClick(tab, event) {
      }
    },
    created(){
        this.getuserShow()//用户数据
        this.getcaredData()//身份数据
        this.getapiTokenList()//api接口权限
        this.getcaredAndApiToken()//身份和api接口关系
        this.getViewTokenKou()//视图接口权限
        this.getcaredAndView()//身份和视图权限关系
    }
}
</script>

<style scoped lang="scss">
.usershow{
  width:100%;
  background: #eee;
  min-height: calc(100vh - 84px);
  overflow: scroll;
}
.usershow .wrapper{
  width:100%;
  height: 80px;
  line-height: 80px;
  padding-left:20px;
}
.usershow .wrapper p{
  font-size:25px;
  color:#333;

}
.usershow .tab{
  width:100%;
  height:50px;
  display:flex;
  margin-left:20px
}
.usershow .info{
  width:100%;
  height:70px;
  line-height: 70px;
}
.usershow .info p{
  font-size: 30px;
  font-weight: 700px;
}
.usershow .content{
  margin-left:20px;
}
.usershow .fenye{
  margin-right:20px;
  float: right;
}
</style>
