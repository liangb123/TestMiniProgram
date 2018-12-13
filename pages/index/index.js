//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    familyDocInfo: {},
    bannerImage: './kaifeier.jpg',
    videoData: [],
    scienceData: [],
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },

  onLoad: function() {
    const ccc = this;
    wx.request({
        url: 'https://zaq12wsxcde3.dazhuanjia.net/blobstore/video/list/v2?videoTypeTag=MEDICAL_POPULARITY&sortBy=CREATE_TIME_DESC&offset=0&limit=3',
        header: {
          'content-type': 'application/json',
          'token': wx.getStorageSync("token")
        },
        success(res) {
          if (res.data.message) {
            ccc.setData({
              name: res.data.message
            })
          } else {
            var videoArray = res.data.data;
            for (var i = 0; i < videoArray.length; i++) {
              var item = videoArray[i];
              var createTime = item.createTime;
              item.createTime = util.formatTime(createTime)
            }
            ccc.setData({
              videoData: videoArray
            })
          }
        },
        fail(res) {
          console.log(res);
        }
      }),

      wx.request({
        url: 'https://zaq12wsxcde3.dazhuanjia.net/bdc/health_medical_popular/patient/list?status=APPROVED&offset=0&limit=3',
        header: {
          'content-type': 'application/json',
          'token': wx.getStorageSync("token"),
        },
        success(res) {
          var dataSource = res.data.data;
          console.log('dataSource', dataSource);
          if (dataSource) {
            for (var i = 0; i < dataSource.length; i++) {
              var item = dataSource[i];
              var imageUrl = item.healthImgs == null ? 'dakdjsakl' : ccc.data.imageSrc + item.healthImgs[0]
              item.healthImgs = [imageUrl]
            }
            ccc.setData({
              scienceData: dataSource,
            })
          }
        }
      })
  },

  // 当自定义组件触发 parentEvent 事件时，调用 onParentEvent 方法
  onParentEvent: function(event) {
    // 自定义组件触发事件时提供的detail对象，用来获取子组件传递来的数据
    var id = event.detail.id;
    wx.navigateTo({
      url: '../mine/personalCenter/personalCenter'
    })
  },

  ckilcScienceItem(event) {
    const that = this;
    var id = event.detail.id;
    var newsId = that.data.scienceData[id].newsId;
    var linkUrl = encodeURIComponent(`http://zaq12wsxcde3.dazhuanjia.net/edu/news/view/${newsId}?pusherName=大专家.COM&pushType=PLATFORM&isPlain=true&pushId=358`)
    wx.navigateTo({
      url: `../webview/webView?linkUrl=${linkUrl}`
    })
  },
  onGotUserInfo(res) {
    wx.showLoading({
      title: '登录中'
    })
    console.log(res.detail)
    console.log(res.detail.errMsg)
    if (res.detail.errMsg == 'getUserInfo:ok') {
      this.setUserInfoAndNext(res)
    } else {
      wx.hideLoading()
    }
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

  onShareAppMessage: function(love) {
    console.log(love)
  }
})