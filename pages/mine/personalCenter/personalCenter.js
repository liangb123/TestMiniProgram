// pages/mine/personalCenter/personalCenter.js
var QRCodeJS = require('../../../utils/qrcode/qrcode.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataSource:['个人主页','个人简介','邀请医生'],
    srcListArrow:'../rightArrow.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    QRCodeJS.qrApi.draw('https://www.baidu.com', 'logoQRCode', 234, 234, null,'../headerIMG.jpeg');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})