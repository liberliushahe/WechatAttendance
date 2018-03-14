
var QQMapWX = require('../../../libs/qqmap-wx-jssdk.min.js')
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
    date: '',
    iscard: false,
    punchnone: '../../../resources/images/icons/punchcard.png',
    punchselected: '../../../resources/images/icons/punchcard-selected.png',
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },


  /**
   * 点击打卡，获取位置信息
   */
  punchCard: function () {
    // 实例化API核心类
    var demo = new QQMapWX({
      key: '2FJBZ-PLX3F-CY2JK-JUEQC-WUU6Q-TIFX5'
    });
    var lat = '';
    var lon = '';
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        lat = res.latitude
        lon = res.longitude
        // 调用接口
        demo.reverseGeocoder({
          location: {
            latitude: lat,
            longitude: lon
          },
          success: function (res) {
            var date = util.formatTime(new Date)
            that.setData({
              address: res.result.address,
              date: date
            })
          },
          fail: function (res) {
            console.log(res);
          }

        });
        that.setData({
          iscard: true
        })
        wx.showToast({
          title: '恭喜，打卡成功',
        })
      },
    })
  },
  punchCardSelected: function () {
    wx.showToast({
      title: '你已经打过卡了',
    })
  }
})