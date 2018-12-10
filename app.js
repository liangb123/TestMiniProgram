//app.js
App({
  onLaunch: function (event) {
    console.log(event);
    var that = this;

    // wx.request({
    //   url: 'https://zaq12wsxcde3.dazhuanjia.net/idp/user/login',
    //   data: {
    //     userCode:'jiawei',
    //     password: '888888',
    //   },
    //   method:'POST',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success(res) {
    //     console.log(res);
    //     if (res.data.message) {
    //       wx.showToast({
    //         title: 'res.data.message',
    //       })
    //     } else {
    //       wx.showToast({
    //         title: '自动登录成功',
    //       })
    //       var ddd = res.data.data;
    //       console.log(ddd);
    //       that.globalData.token = ddd;
    //     }
    //   },
    //   fail(res) {
    //     console.log(res);
    //   }
    // })
  },
  
  onShow: function(options) {
    
  },

  globalData: {
    userInfo: null,
    token: '',
    baseUrl: {
      imageUrl: 'http://dzj-test.img-cn-shanghai.aliyuncs.com/',
    }
  },
})