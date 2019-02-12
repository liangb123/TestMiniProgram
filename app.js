//app.js
App({
  onLaunch: function (event) {
    console.log(event);
    var that = this;
    wx.request({
      url: 'https://zaq12wsxcde3.dazhuanjia.net/idp/user/login',
      data: {
        userCode:'jiawei',
        password: '888888',
      },
      method:'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res);
        if (res.data.message) {
          wx.showToast({
            title: 'res.data.message',
            icon:'none'
          })
        } else {
          wx.showToast({
            title: '自动登录成功',
          })
          var ddd = res.data.data;
          console.log(ddd);
          wx.setStorageSync("token", ddd)
          // that.setUserInfoAndNext(res)
        }
      },
      fail(res) {
        console.log(res);
      }
    }),

    wx.getSetting({
      success(res) {
        console.log('ddddd', res.authSetting['scope.userInfo'])
      }
    })


  },

  setUserInfoAndNext(res) {
    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    // 所以此处加入 callback 以防止这种情况
    if (this.userInfoReadyCallback) {
      this.userInfoReadyCallback(res)
    }
    console.log('chenggong  chenggong ')
    wx.hideLoading()
    // 跳转首页
    setTimeout(() => {
      wx.reLaunch({
        url: '../index/index'
      })
    }, 1000)
  },
  
  onShow: function(options) {
    
  },

  globalData: {
    userInfo: null,
    baseUrl: {
      imageUrl: 'http://dzj-test.img-cn-shanghai.aliyuncs.com/',
    },
    // defaultImg:'/pages/'
  },
})