// pages/sign/sign.js
Page({
  data:{
    text:[
      "←绑定手机",
      "发送验证码",
      "下一步",
      "请输入手机号",
      "请输入验证码"
      ]
  },
  back:function(){
    wx.redirectTo({
      url: "../teacher/teacher"
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
  }
})