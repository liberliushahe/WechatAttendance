Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }     
    ],
    menus:[
      {
        url:'../../resources/images/menu/menu1.png',
        name:'听歌'
      },
      {
        url: '../../resources/images/menu/menu1.png',
        name: '听歌'
      },
      {
        url: '../../resources/images/menu/menu1.png',
        name: '听歌'
      },
      {
        url: '../../resources/images/menu/menu1.png',
        name: '听歌'
      }
      
    ]
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var articles=[
      {
        id:0,
        name: '大学教授访问某大学，各位师生集体欢迎集体欢迎集体欢迎集体欢迎集体欢迎',
        url: '../../resources/images/new.png',
        time: '2017年12月23日 13:12:23',
        read: '2000'
      },
      {
        id:1,
        name: '大学教授访问某大学，各位师生集体欢迎',
        url: '../../resources/images/new.png',
        time: '2017年12月23日 13:12:23',
        read: '2000'
      },
      {
        id:2,
        name: '大学教授访问某大学，各位师生集体欢迎',
        url: '../../resources/images/new.png',
        time: '2017年12月23日 13:12:23',
        read: '2000'
      }
    ]
    this.setData({
      articles:articles
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
  isShow:false,
  onShow: function () {
    var that=this;
    this.isShow=true;
    wx.onAccelerometerChange(function(e){
      if(!that.isShow){
        return;
      }
      if(e.x>1&&e.y>1){
        wx.showToast({
          title: '打卡成功',
          success:'success',
          duration:2000
        })
      }
    }),
    wx.getSetting({
      success(res){
        if(!res.authSetting['scope.userInfo']){
          wx.authorize({
            scope: 'scope.userInfo',
            success(){
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
    this.isShow=false;
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
  getArticle:function(event){
  var id=event.currentTarget.dataset.articleid;
   wx.navigateTo({
     url: 'article/article?id='+id,
   }
   
   )
  }
})