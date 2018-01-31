// pages/index/article/article.js
var articleData = require('../../../data/article-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.data.currentId =id;
    this.setData({
      article: articleData.articlesList[id]
    })
  /**
   * 由于没有服务器所以将数据缓存到本地，如果有服务器数据从服务器获取
   */
    var collecteds=wx.getStorageSync("collecteds")
    if(collecteds){
      var collected = collecteds[id]
      this.setData({
        articlecollected: collected
      })
    }else{
      var collecteds=[]
      collecteds[id]=false
      wx.setStorageSync("collecteds", collecteds)
    }
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
   * 小程序点击三个点出现
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: '用智能的手段解决问题',
      desc: '只有做的更好 才会有生路'

    }
  },
  /**
   * 收藏文章
   */
  onCollectTap: function () {
    var collecteds = wx.getStorageSync("collecteds")
    console.log(collecteds)
    var collected=collecteds[this.data.currentId]
    //相反操作
    collected = !collected
    collecteds[this.data.currentId] = collected
    wx.setStorageSync('collecteds', collecteds);
    // 更新数据绑定变量，从而实现切换图片
    this.setData({
      articlecollected: collected
    })
    wx.showToast({
      title: collected ? "收藏成功" : "取消成功",
      duration: 1000,
      icon: "success"
    })
  },
  /**
* 点赞
*/
  assist: function () {
  wx.showToast({
    title: '点赞成功',
    })
  },
  /**
   * 分享
   */
  onShareTap: function (event) {
    var itemList = [
      "分享给微信好友",
      "分享到朋友圈",
      "分享到QQ",
      "分享到微博"
    ];

    wx.showActionSheet({
      itemList: itemList,
      itemColor: "#405f80",
      success: function (res) {
        wx.showModal({
          title: "是否" + itemList[res.tapIndex]

        })
      }
    })
  }

})