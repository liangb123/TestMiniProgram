// pages/common/scienceDetail/scienceDetail.js
const util = require('../../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scienceData: {},
    scienceVoteUnselect:'./scienceVoteUnselect.png',
    scienceVoteSelect:'./scienceVoteSelect.png',
    voteImage:'./scienceVoteUnselect.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var newsId = decodeURIComponent(options.newsId);
    const that = this;
    wx.request({
      url: `https://zaq12wsxcde3.dazhuanjia.net/bdc/news/${newsId}?timestamp=1544768136385`,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync("token")
      },
      success(res) {
        var scienceData = res.data.data;
        var article = scienceData.newsContent || '';
        WxParse.wxParse('article', 'html', article, that, 0);
        var createdTime = scienceData.createdTime;
        console.log('old', createdTime);
        scienceData.createdTime = util.formatTime(createdTime);
        that.setData({
          scienceData: scienceData
        })
      },
      fail(res) {
        console.log(res);
      }
    })
  },

  voteAction:function(){

    this.setData({
      voteImage: this.data.scienceVoteSelect
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})