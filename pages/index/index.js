//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    text:[
      '学生入口 >>',
      '教师入口 >>',
      '企业入口 >>',
      '北京科技大学就业指导中心'
      ]
  },
  //事件处理函数
  student: function() {
    wx.navigateTo({
      url: '../student/student'
    })
  },
  teacher:function(){
      wx.navigateTo({
        url: '../teacher/teacher',
      })
  },
   adjust:function(){
      wx.navigateTo({
        url: '../adjust/adjust',
      })
  },
  company:function(){
      wx.navigateTo({
        url: '../company/company',
      })
  },
  ceshi:function(){
      wx.navigateTo({
        url: '../ceshi/ceshi',
      })
  },
//   ceshi(){
//      showBusy('jkefjkj ');
//   },
//   doLogin(){
// showBusy('jkefjkj ');
//   },
  onShareAppMessage: function () {
    return {
      title: '发送给朋友',
      path: '/pages/index/index?id=123'
    }
  }
})
