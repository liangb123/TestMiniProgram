// pages/component/videoListView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      value: [],
      observer: function (newVal, oldVal) {
        this.resetRight(newVal);
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    array:[],
    defaultImg: "../../pages/mine/medicalScience/default_img.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 数据重新渲染
    resetRight(data) {
      let rightArr = []
      for (let i in data) {
        rightArr.push(data[i]);
      }
      this.setData({
        array: rightArr,
      })
    },
    errorFunction(e) {
      if (e.type == "error") {
        var errorImgIndex = e.target.dataset.errorimg; //获取错误图片循环的下标
        var imgList = this.data.array;　　　　　　　 //将图片列表数据绑定到变量
        imgList[errorImgIndex].img = this.data.defaultImg;
        this.setData({
          array: imgList
        })
      };
    },
  }
})
