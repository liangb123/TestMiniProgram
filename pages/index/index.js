//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    familyDocInfo:{},
    bannerImage:'./kaifeier.jpg',
    videoData:[],
    scienceData:[],
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },

  onLoad: function () {  
    const ccc = this;
    wx.request({
      url: 'https://zaq12wsxcde3.dazhuanjia.net/blobstore/video/list/v2?videoTypeTag=MEDICAL_POPULARITY&sortBy=CREATE_TIME_DESC&offset=0&limit=3',
      header: {
        'content-type': 'application/json',
        'token': app.globalData.token
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
        'token': app.globalData.token,
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

  getUserInfo: function(e) {
   console.log('useruser');
  },

  onShareAppMessage: function(love){
    console.log(love)
  }
})
