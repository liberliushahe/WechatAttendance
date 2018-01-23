// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:"" ,
    latitude:"",
    markers: [{
      iconPath: "../../resources/images/icons/location.png",
      id: 0,
      latitude: "",
      longitude: "",
      width: 50,
      height: 50,
      title:"甘肃兰州"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   *  
   * 设置位置
   * 
   * 数组对象赋值先用一个变量，把数组中对象属性用字符串拼接
   */
  onShow: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        var long=res.longitude
        var lat=res.latitude
        var speed=res.speed
        var markerlong = "markers[" + 0 + "].longitude";
        var markerlat = "markers[" + 0 + "].latitude";
        that.setData({
          longitude: long,
          latitude: lat,
          [markerlong]:long,
          [markerlat]:lat
        })
      },
    })
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
  
  },
    /**
   * 地图事件
   */
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})

