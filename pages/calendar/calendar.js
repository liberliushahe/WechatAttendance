// pages/calendar/calendar.js
var util = require('../../utils/util.js')
var bmap = require('../../libs/bmap-wx.min.js');
Page({
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  currentTime:function () {
    var that = this
  
    var date = util.formatTime(new Date)
    var time = date.substring(10)
    that.setData({
      time:time
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    year:"2018年 星期四 1",
    day:"25",
    time:"",
    weatherData: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var date=util.formatTime(new Date)
    var year= date.substring(0,7)
    var day=date.substring(8,10)
    var time=date.substring(10)
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'UfOGxkLRO2VKPCZGDLpQrFvYqRlCFSer'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherData: weatherData,
        year: year,
        day: day
      }); 
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });

    setInterval(function () {
      var date = util.formatTime(new Date)
      var time = date.substring(10)
      that.setData({
      time:time
      })
    }, 1000)

    
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