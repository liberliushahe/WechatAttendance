var articleData = require('../../data/article-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      { url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1568466298,2626488097&fm=11&gp=0.jpg' },
      { url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2321005072,2015961548&fm=11&gp=0.jpg' },
      { url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1504959092,424655924&fm=11&gp=0.jpg' },
      { url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2128112700,3097521763&fm=27&gp=0.jpg' }
    ],
    menus: [
      {
        id: 1,
        url: '../../resources/images/menu/scan.png',
        name: '扫一扫'
      },
      {
        id: 2,
        url: '../../resources/images/menu/translate.png',
        name: '翻译'
      },
      {
        id: 3,
        url: '../../resources/images/menu/rebot.png',
        name: '智能客服'
      },
      {
        id: 4,
        url: '../../resources/images/menu/menu1.png',
        name: '图像识别'
      }

    ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      articles: articleData.articlesList
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   * 页面显示，提供摇一摇功能
   */
  isShow: false,
  onShow: function () {
    var that = this;
    this.isShow = true;
    wx.onAccelerometerChange(function (e) {
      if (!that.isShow) {
        return;
      }
      if (e.x > 1 && e.y > 1) {
        wx.showToast({
          title: '打卡成功',
          success: 'success',
          duration: 2000
        })
      }
    }),
      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.userInfo']) {
            wx.authorize({
              scope: 'scope.userInfo',
              success() {
                wx.showModal({
                  title: 'ceshi',
                  content: 'ceshi',
                })
              }
            })
          }
        }
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   * 摇一摇功能隐藏
   */
  onHide: function () {
    this.isShow = false;
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
   * 获取消息详情
   */
  getArticle: function (event) {
    var id = event.currentTarget.dataset.articleid;
    wx.navigateTo({
      url: 'article/article?id=' + id,
    }

    )
  },
  /**
   * 图片错误默认
   */
  errorFunction: function () {
    this.setData({

    })
  },
  /**
  *快捷按钮
  *扫一扫
  *翻译
  *智能客服
  *图像识别
 */
  menuevent: function (event) {
    var id = event.currentTarget.dataset.menuid;
    if (id == 1) {
      wx.scanCode({
        onlyFromCamera: true,
        success: (res) => {
          console.log(res.result)
          wx.showToast({
            title: '结果'+res.result,
          })
        }
      })
    } else if (id == 2) {
      wx.navigateTo({
        url: 'translate/translate'
      })
    } else if (id == 3) {
      wx.navigateTo({
        url: 'rebot/rebot'
      })
    }

  }
})