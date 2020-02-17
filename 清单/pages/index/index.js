//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
     navList:[{
      "title":"目标"
     },{
      "title": "习惯"
     },{
      "title": "手记"
     }],
     mBYi:"0",
     mBList:{
       "title":"多彩周末体验计划",
       "list":[
         {
           "text":"看一场私人电影",
           "state":"fasle"
         },
         {
           "text": "玩一次保龄球",
           "state": "fasle"
         },
         {
           "text": "玩一次射箭",
           "state": "fasle"
         }, 
         {
           "text": "上一下太空",
           "state": "fasle"
         }
       ]
     },
    xGList: {
      "title": "我的习惯",
      "list": [
        {
          "text": "早晨空腹喝一杯水",
          "state": "0"
        },
        {
          "text": "早晨运动",
          "state": "0"
        }
      ]
    }
  },
  //事件处理函数
  addMB:function(){
    wx.navigateTo({
      url: '../addBM/addBM'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
