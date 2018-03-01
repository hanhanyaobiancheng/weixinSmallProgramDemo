// pages/student/student.js
Page({
  data:{
    src:"../../image/北科大.png",
    imgUrls:[
              '../../image/2.jpg',
              '../../image/3.jpg',
              '../../image/4.jpg',
              '../../image/5.jpg'
            ],
    url:[
      '../../image/10.png',
      '../../image/11.png',
      '../../image/12.png',
      '../../image/13.png',
      '../../image/14.png',
      '../../image/15.png',
      '../../image/16.png',
      '../../image/17.png'
    ],
    text:[
      '院校通知',
      '就业指导',
      '职业测评',
      '异域风情',
      '就业政策',
      '创新创业',
      '在线视频',
      '预约系统',
      '校园通知',
      'NOTICE'
    ],
    indicate:true,
    auto:true,
    inter:2000,
    dura:1000
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
      path: '/pages/student/student?id=123'
    }
  }
})