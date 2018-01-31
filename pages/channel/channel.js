// pages/channel/channel.js

Page({
  play: "../../resources/images/icons/play.png",
  /**
   * 页面的初始数据
   */
  data: {
    playing: false,
    music: [{
      id: 0,
      icon: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000",
      name: "夜夜夜夜",
      singer: "齐秦",
      src: "http://ws.stream.qqmusic.qq.com/C100003507bR0gDKBm.m4a?fromtag=38",
      isplay: false
    },
    {
      id: "1",
      src: "http://ws.stream.qqmusic.qq.com/C100003GdCmG4NkEOR.m4a?fromtag=38",
      name: "鬼迷心窍",
      singer: "李宗盛",
      icon: "http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000",
      isplay: false
    },
    {
      id: "2",
      src: "http://ws.stream.qqmusic.qq.com/C100004HLusI2lLjZy.m4a?fromtag=38",
      name: "女儿情",
      singer: "万晓利",
      icon: "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000",
      isplay: false
    },
    {
      id: "3",
      src: "http://ws.stream.qqmusic.qq.com/C100002mWVx72p8Ugp.m4a?fromtag=38",
      name: "恋恋风尘",
      singer: "老狼",
      icon: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001VaXQX1Z1Imq.jpg?max_age=2592000",
      isplay: false
    },
    {
      id: "4",
      src: "http://ws.stream.qqmusic.qq.com/C100000Zn0vS4fKKo8.m4a?fromtag=38",
      name: "沉默是金",
      singer: "张国荣",
      icon: "http://y.gtimg.cn/music/photo_new/T002R150x150M000003at0mJ2YrR2H.jpg?max_age=2592000",
      isplay: false
    },
    {
      id: "5",
      src: "http://ws.stream.qqmusic.qq.com/C100002I8eGJ28BI17.m4a?fromtag=38",
      name: "朋友",
      singer: "谭咏麟",
      icon: "http://y.gtimg.cn/music/photo_new/T002R150x150M000004eGsCN3SUheO.jpg?max_age=2592000",
      isplay: false
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
    ],
    book: [
      {
        icon: "http://img0.imgtn.bdimg.com/it/u=315528357,3124662951&fm=27&gp=0.jpg",
        name: "明朝那些事"

      },
      {
        icon: "http://img0.imgtn.bdimg.com/it/u=315528357,3124662951&fm=27&gp=0.jpg",
        name: "明朝那些事"

      },
      {
        icon: "http://img0.imgtn.bdimg.com/it/u=315528357,3124662951&fm=27&gp=0.jpg",
        name: "明朝那些事"

      },
      {
        icon: "http://img2.imgtn.bdimg.com/it/u=3898590040,2658751400&fm=27&gp=0.jpg",
        name: "文心雕龙"
      },
      {
        icon: "http://img2.imgtn.bdimg.com/it/u=3898590040,2658751400&fm=27&gp=0.jpg",
        name: "文心雕龙"
      },
      {
        icon: "http://img2.imgtn.bdimg.com/it/u=3898590040,2658751400&fm=27&gp=0.jpg",
        name: "文心雕龙"
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
  playMusic: function (event) {
    var that = this
    var id = event.currentTarget.dataset.srcid
    var music = that.data.music[id]
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = music.name
    backgroundAudioManager.epname = music.name
    backgroundAudioManager.singer = music.singer
    backgroundAudioManager.coverImgUrl = music.url
    backgroundAudioManager.src = music.src
    var play = that.data.music[id].isplay
    var isplay = "music[" + id + "].isplay";
    if (!play) {
      that.setData({
        [isplay]: true
      })
    } else {
      that.setData({
        [isplay]: false
      })
      backgroundAudioManager.stop()
    }
    backgroundAudioManager.onEnded(function(e){
      that.setData({
        [isplay]: false
      })
    })

    
      
    
  }

})