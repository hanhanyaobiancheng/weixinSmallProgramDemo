// pages/teacher/teacher.js
Page({
  data:{
    text:[
      "教师登录",
      "登录",
      "忘记密码",
      "请输入登录账号",
      "请输入密码"
    ],
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  sign:function(){
    wx.navigateTo({
      url: '../sign/sign',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onShareAppMessage: function () {
    return {
      title: '发送给朋友',
      path: '/pages/teacher/teacher?id=123'
    }
  }
})