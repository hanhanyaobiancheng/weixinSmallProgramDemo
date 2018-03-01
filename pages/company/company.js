// pages/company/company.js
Page({
  data:{
    head:'企业注册',
    start:"马上开始",
    value:"同意",
    else:"已经有账户了吗？",
    checked: 'true',
    text:[
      '注册即表明:',
      '一、用户注册、登陆，视为接受本协议的约束。',
      '二、用户承诺遵守国家的法律法规及部门规章。',
      '三、用户承诺遵守“就业宝”的知识产权政策。',
      '四、用户承诺遵守“就业宝”现行有效的及将来发布的各类规则，且政策及规则优先，后发布的优先。',
      '五、用户侵犯第三人的知识产权，由该用户承担全部法律责任。',
      '六、“就业宝”有权向用户追偿因其侵权所发生的赔偿款、诉讼费、律师费等损失。',
      '七、发生争议，任何一方均有权向“就业宝”营业地人民法院提起诉讼。',
      '八、一旦发现用户有上传侵权作品，“就业宝”将进行下架和删除。'
    ],
    items: [
      {name: 'yes', value: '同意'},
    ]
  },
  jiuyebao:function(){
      wx.navigateTo({
        url: '../jiuyebao/jiuyebao',
      })
  },
  checkboxChange: function(e) {
    this.setData({checked:!this.data.checked})
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
      path: '/pages/company/company?id=123'
    }
  }
})