// pages/channel/channel.js
var isPlay = true
Page({

  /**
   * 页面的初始数据
   */
  data: {
    music: [{
      icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516708383412&di=d2094b79ebe4bb99e0590895f112cf61&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F91%2F19i58PICnAh_1024.jpg",
      name: "天涯-只要有你",
      src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46",
      play: "../../resources/images/icons/play.png"
    },
    {
      icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516708383412&di=d2094b79ebe4bb99e0590895f112cf61&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F91%2F19i58PICnAh_1024.jpg",
      name: "吴征宇-你的选择",
      src: "http://sc1.111ttt.cn/2017/1/11/11/304112004168.mp3",
      play: "../../resources/images/icons/play.png"
    },
    {
      icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516708383412&di=d2094b79ebe4bb99e0590895f112cf61&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F91%2F19i58PICnAh_1024.jpg",
      name: "刘宇-看透爱情看透你",
      src: "  http://sc1.111ttt.cn/2017/1/11/11/304112002493.mp3",
      play: "../../resources/images/icons/play.png"
    },
    {
      icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516708383412&di=d2094b79ebe4bb99e0590895f112cf61&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F91%2F19i58PICnAh_1024.jpg",
      name: "刘宇-看透爱情看透你",
      src: "  http://sc1.111ttt.cn/2017/1/11/11/304112002493.mp3",
      play: "../../resources/images/icons/play.png"
    },
    {
      icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516708383412&di=d2094b79ebe4bb99e0590895f112cf61&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F23%2F91%2F19i58PICnAh_1024.jpg",
      name: "刘宇-看透爱情看透你",
      src: "  http://sc1.111ttt.cn/2017/1/11/11/304112002493.mp3",
      play: "../../resources/images/icons/play.png"
    }

    ],
    video: [{
      url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
      poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516706638851&di=bbb6690ff69ba5a7a39ab8823f727f5f&imgtype=0&src=http%3A%2F%2F3gimg.qq.com%2Fdaxue_qq_com%2Fimage%2F201502%2F1423038769903.png",
      desc: "微信大学公开课"
    },
    {
      url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
      poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516706638851&di=bbb6690ff69ba5a7a39ab8823f727f5f&imgtype=0&src=http%3A%2F%2F3gimg.qq.com%2Fdaxue_qq_com%2Fimage%2F201502%2F1423038769903.png",
      desc: "微信大学公开课"
    },
    {
      url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
      poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516706638851&di=bbb6690ff69ba5a7a39ab8823f727f5f&imgtype=0&src=http%3A%2F%2F3gimg.qq.com%2Fdaxue_qq_com%2Fimage%2F201502%2F1423038769903.png",
      desc: "微信大学公开课"
    },
    {
      url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
      poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516706638851&di=bbb6690ff69ba5a7a39ab8823f727f5f&imgtype=0&src=http%3A%2F%2F3gimg.qq.com%2Fdaxue_qq_com%2Fimage%2F201502%2F1423038769903.png",
      desc: "微信大学公开课"
    },
    {
      url: "http://27.148.241.176/PLTV/88888888/224/3221226193/1.m3u8",
      poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516706638851&di=bbb6690ff69ba5a7a39ab8823f727f5f&imgtype=0&src=http%3A%2F%2F3gimg.qq.com%2Fdaxue_qq_com%2Fimage%2F201502%2F1423038769903.png",
      desc: "微信大学公开课"
    }




    ]

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
  /**音频函数 */


  play: function (event) {
    var src = event.currentTarget.dataset.srcid

    console.log(src)
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = src
    if (isPlay) {
      isPlay = false

      innerAudioContext.onPlay()

    } else {
      isPlay = true
      innerAudioContext.onPause()
      console.log('停止播放')
    }

    innerAudioContext.onError((res) => {
      console.log(res.errMsg)

    })
  }

})