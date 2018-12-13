// pages/mine/medicalScience/medicalScience.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    imageSrc: app.globalData.baseUrl.imageUrl,
    offset: 0,
    hasMoreData: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.loadData(0, 10);
  },

  loadData: function(e, f) {
    const ccc = this;
    wx.showLoading({
      title: '加载中',
    })
    var urlStr = 'https://zaq12wsxcde3.dazhuanjia.net/bdc/health_medical_popular/patient/list?status=APPROVED&offset=' + e + '&limit=' + f;
    wx.request({
      url: urlStr,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync("token"),
      },

      success(res) {
        var dataSource = res.data.data;
        console.log('dataSource', dataSource);
        var hasMoreData = false;
        if (dataSource) {
          hasMoreData = dataSource.length == 10;
          console.log('hasMoreData', hasMoreData);
          for (var i = 0; i < dataSource.length; i++) {
            var item = dataSource[i];
            var imageUrl = item.healthImgs == null ? 'dakdjsakl' : ccc.data.imageSrc + item.healthImgs[0]
            item.healthImgs = [imageUrl]
          }
          var dataArray = [];

          if (e == 0) {
            dataArray = dataSource
          } else {
            dataArray = ccc.data.array.concat(dataSource);
          }
          var currentOffset = dataArray.length;
          console.log('currentOffset', currentOffset);

          console.log('dataArray', dataArray);
          ccc.setData({
            array: dataArray,
            offset: currentOffset,
            hasMoreData: hasMoreData,
          })
        }else{
          ccc.setData({
            hasMoreData: hasMoreData,
          })
        }
        wx.hideLoading();
      },
      fail(res){
        wx.hideLoading();
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log('下拉');
    this.setData({
      offsset: 0
    })
    this.loadData(0, 10)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('上拉');
    console.log('this.data.hasMoreData', this.data.hasMoreData)
    if (this.data.hasMoreData) {
      this.loadData(this.data.offset, 10)
    } else {
      wx.showToast({
        title: '没有更多数据了',
        icon:'none'
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})