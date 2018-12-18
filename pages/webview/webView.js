// pages/webview/webView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    linkUrkl:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options)
    var link = decodeURIComponent(options.linkUrl); 
    console.log(link)
    that.setData({
      linkUrkl: link
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})