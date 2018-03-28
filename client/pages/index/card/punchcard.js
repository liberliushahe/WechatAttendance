
var QQMapWX = require('../../../libs/qqmap-wx-jssdk.min.js')
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
    cardData:[],
    currentCard: {},
    date: '',
    iscard: false,
    punchnone: '../../../resources/images/icons/punchcard.png',
    punchselected: '../../../resources/images/icons/punchcard-selected.png',
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this
    //加载数据之前首先判断当天是否有记录，如果没有记录则将iscard置为true
    var date = util.formatTime(new Date)
    var cardData= wx.getStorageSync("cardData")
    var current = wx.getStorageSync("current")
    if(current){
      if (current==date.substring(0,10))
      that.setData({
        iscard: true,
      })
    }else{
      that.setData({
        iscard: false,
      })
    }

    if (cardData){
      console.log(date.substring(0,10))
      that.setData({
        cardData: cardData
      })
    }else{
     var cardData=[]
     wx.setStorageSync("cardData", cardData)
    }
  },


  /**
   * 点击打卡，获取位置信息
   */
  punchCard: function () {
    // 实例化API核心类
    var demo = new QQMapWX({
      key: '2FJBZ-PLX3F-CY2JK-JUEQC-WUU6Q-TIFX5'
    });
    var lat = '';
    var lon = '';
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        lat = res.latitude
        lon = res.longitude
        // 调用接口
        demo.reverseGeocoder({
          location: {
            latitude: lat,
            longitude: lon
          },
          success: function (res) {
            var date = util.formatTime(new Date)
            that.setData({
              address: res.result.address,
              date: date
            })
            var cardData = that.data.cardData
            var currentCard = that.data.currentCard
            currentCard.address = res.result.address
            currentCard.date = date
            currentCard.id = res.result.id
            cardData.push(currentCard)
         
            //将数据存入微信缓存
            wx.setStorage({
              key: 'cardData',
              data: cardData,
            })
            wx.setStorage({
              key: 'current',
              data: date.substring(0, 10),
            })
          },
          fail: function (res) {
            console.log(res);
          }

        });
        that.setData({
          iscard: true
        })
        wx.showToast({
          title: '恭喜，打卡成功',
        })
        wx.vibrateLong({
          
        })
      },
    })
  },
  punchCardSelected: function () {
    wx.showToast({
      title: '你已经打过卡了',
    })
  }
})