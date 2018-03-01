// pages/index/rebot/rebot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '',
    content:[]
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
   * 发送消息按钮
   */
  sendMessage: function (event) {
    var that=this
    var mess = that.data.message;
    if (mess == null || mess === '') {
      wx.showToast({
        title: '消息不能为空'
      })
    } else {
      var appkey = "147c3451003239dcb1ac1dda32660d4e";
      var datas=that.data.content
      datas.push({"rebot":false,"text":mess})
      that.setData({
        content:datas
      })
      var url = "https://v.juhe.cn/robot/index?key=" + appkey + "&info=" + mess;
      wx.request({
        url: url,
        success:function(e){
          console.log(e)
        }
      })
      datas.push({ "rebot": true, "text": "我是智能机器人" })
      that.setData({
        content: datas
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
  }
})