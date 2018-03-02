
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '',
    content: [],
    usermessage: '',
    avatar: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getUserInfo({
      success: function (userInfo) {
        that.setData({
          avatar: userInfo.userInfo.avatarUrl
        })
      }
    });
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
   * 发送消息按钮
   */
  sendMessage: function (event) {
    var that = this
    var mess = that.data.message;
    if (mess == null || mess === '') {
      wx.showToast({
        title: '消息不能为空'
      })
    } else {
      var appkey = "57992";
      var sign = "81b5351e889649efb514ddf707a869c4";
      var datas = that.data.content
      var avatar = that.data.avatar
      datas.push({ "rebot": false, "text": mess, "avatar": avatar })
      that.setData({
        content: datas,
        usermessage: ''
      })
       var i=400
      var url = "https://route.showapi.com/60-27?showapi_appid=" + appkey + "&info=" + mess + "&showapi_sign=" + sign;
      wx.request({
        url: url,
        success: function (result) {
          console.log()
          if (result.data.showapi_res_code == 0) {
            datas.push({ "rebot": true, "text": result.data.showapi_res_body.text })
            that.setData({
              content: datas
            })
            wx.pageScrollTo({
              scrollTop: i+10,
              duration: 300
            })
          } else {
            datas.push({ "rebot": true, "text": "智能机器人罢工了" })
            that.setData({
              content: datas
            })
          }
        }
      })
    }
  },
  /**
   * 发送消息内容
   */
  inputMessage: function (e) {
    var that = this
    that.setData({
      message: e.detail.value
    })
  },
  backbottom:function(e){
   console.log(e)
  }
})