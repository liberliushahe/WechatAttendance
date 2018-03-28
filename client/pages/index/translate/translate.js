// pages/index/translate/translate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  content:'',
  usercontent:''
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
   * 翻译
   */
  search:function(){
      var that = this
      var usercontent = that.data.usercontent;
      if (usercontent == null || usercontent === '') {
        wx.showToast({
          title: '内容不能为空'
        })
      } else {
        var appkey = "57992";
        var sign = "81b5351e889649efb514ddf707a869c4";
        var url = "https://route.showapi.com/1479-1?showapi_appid=" + appkey + "&content=" + usercontent + "&showapi_sign=" + sign;
        wx.request({
          url: url,
          dataType: 'json',
          success: function (result) {
            if (result.data.showapi_res_code == 0) {
          
              that.setData({
                content: result.data.showapi_res_body.fanyi,
            
              })
            } else {
              
              that.setData({
                content: ''
               
              })
            }
          }
        })

      }
    
  },
  /**
  * 发送消息内容
  */
  inputContent: function (e) {
    var that = this
    that.setData({
      usercontent: e.detail.value
    })
  },
})