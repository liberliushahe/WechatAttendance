// pages/mime/mime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfoicon: "../../resources/images/icons/userinfo.png",
    usercard: "../../resources/images/icons/card.png",
    usersetting: "../../resources/images/icons/setting.png",
    big: "../../resources/images/icons/big.png",
    about:"../../resources/images/icons/about.png"
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
   */
  onShow: function () {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo
        })
      }
    });
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
   * 个人打卡
   */
  owncard:function(){
  wx.navigateTo({
    url: 'card/card',
  })
  },
  /**
   * 个人信息
   */
  owninfo: function() {
    wx.navigateTo({
      url: 'info/info',
    })
  },
  /**
   * 个人运动
   */
  ownrun:function(){
    wx.navigateTo({
      url: 'run/run',
  })
  },
    /**
   * 个人上传
   */
  ownupload:function(){
    wx.navigateTo({
      url: 'upload/upload',
    })
  },
  about:function(){
    wx.navigateTo({
      url: 'about/about',
    })
  },
  setting:function(){
    wx.navigateTo({
      url: 'setting/setting',
    })
  }
})