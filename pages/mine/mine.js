import userModel from "../model/userModel.js";
const app = getApp()

Page({
  data: {
    userName: '大专家',
    userHospital: '上海长江医院',
    userRole: 'HIM',
    src: './headerIMG.jpeg',
    srcQR: './mineQRCode.png',
    srcArrow: './mineArrow.png',
    srcListArrow: './rightArrow.png',
    array: [{
        title: "测试视频场景",
        image: '../index/homeSelected.png'
      },
      {
        title: "科普刷新加载",
        image: '../index/homeSelected.png'
      },
      {
        title: "测试直播场景",
        image: '../index/homeSelected.png'
      },
      {
        title: "更多",
        image: '../index/homeSelected.png'
      },
      {
        title: "设置",
        image: '../index/homeSelected.png'
      }
    ]
  },

  onLoad: function() {
    const ccc = this;
    wx.request({
      url: 'https://zaq12wsxcde3.dazhuanjia.net/bdc/users/current',
      // data: {
      //   x: '',
      //   y: ''
      // },
      header: {
        'content-type': 'application/json',
        'token': app.globalData.token,
      },
      success(res) {
        var ddd = res.data.data;
        console.log(ddd);
        var nameStr = ddd['name'];
        // var user =new userModel(ddd);
        var role = ddd['tags'][0];
        var hospitalStr = ddd['hospitalName'];
        var imageUrl = app.globalData.baseUrl.imageUrl + ddd['headImg'] + '?x-oss-process=image/resize,h_240,limit_0,x-oss-process=image/crop,h_200,x-oss-process=image/circle,r_100/format,png';
        ccc.setData({
          userName: nameStr,
          userHospital: hospitalStr,
          src: imageUrl,
          userRole: role,
        })
      }
    })
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  tapName: function(event) {
    console.log(event)
    const aaaaa = this;
    var index = event.currentTarget.id;
    console.log(index)
    let titleStr = this.data.array[index].title;
    console.log(titleStr);
   
    switch (index) {
      case '0':
        console.log('进到0')
        wx.navigateTo({
          url: '../mine/personalCenter/personalCenter?userId=' + titleStr
        })
        break;
      case '1':
        console.log('进到1')
        wx.navigateTo({
          url: '../mine/medicalScience/medicalScience?userId=' + titleStr
        })
        break;
      case '2':
        console.log('进到0')
        wx.navigateTo({
          url: '../mine/liveVideo/liveVideo?userId=' + titleStr
        })
        break;
      case '3':
        console.log('进到3')
        // wx.navigateTo({
        //   url: '../mine/personalCenter/personalCenter?userId=' + titleStr
        // })
        break;
      default:
        console.log('进到default')
    }

  },


  clickHeaderview: function(event) {
    wx.showToast({
      title: "点击headerview",
      duration: 2000,
    })
  }
})