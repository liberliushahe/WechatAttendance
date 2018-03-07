const recorderManager = wx.getRecorderManager();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 100,
    message: '',
    content: [],
    usermessage: '',
    avatar: '',
    voice:"../../../resources/images/icons/voice.png",
    keyboard:"../../../resources/images/icons/keyboard.png",
    flag:true,
    isSpeak:true
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
      var url = "https://route.showapi.com/60-27?showapi_appid=" + appkey + "&info=" + mess + "&showapi_sign=" + sign;
      wx.request({
        url: url,
        success: function (result) {
          console.log()
          if (result.data.showapi_res_code == 0) {
            datas.push({ "rebot": true, "text": result.data.showapi_res_body.text })
            that.setData({
              content: datas,
              scrollTop: that.data.scrollTop + 130
            })
          } else {
            datas.push({ "rebot": true, "text": "智能机器人罢工了" })
            that.setData({
              content: datas,
              usermessage: ''
            })
          }
          that.setData({
            message: ''
          })
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
  /**
   * 语音识别
   */
  voice:function(){
    var that = this
    that.setData({
      flag:false
    })

  },
  /**
   * 键盘
   */
  keyboard:function(){
    var that = this
    that.setData({
      flag: true
    })
  },
  /**
   * 语音收集
   */
  sendVoice:function(){
    console.log("voice ");
    var that=this
    //开始录音
    recorderManager.onStart(() => {
      console.log('recorder start')
    })
    //结束录音
    recorderManager.onStop((res) => {
    console.log('recorder stop', res)
    const { tempFilePath } = res
      })
   const options = {
     duration: 10000,
     sampleRate: 44100,
     numberOfChannels: 1,
     encodeBitRate: 192000,
     format: 'mp3',
     frameSize: 50
   }
   recorderManager.start(options)
  },
  touchup:function(){
    recorderManager.stop();
    recorderManager.onStop((res) => {
      this.tempFilePath = res.tempFilePath;
      console.log('停止录音', res.tempFilePath)
      const { tempFilePath } = res
    })
  }
})