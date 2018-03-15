// pages/mime/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    card:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var card=that.data.card
      wx.getStorage({
        key: 'cardData',
        success: function(res) {
          console.log(res.data)
          that.setData({
            card: res.data
          })
            
          
        },
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  }

})