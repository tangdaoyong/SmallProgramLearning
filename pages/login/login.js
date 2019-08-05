// pages/login/login.js
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: ['iBeacon', 'Wi-Fi', '低功耗蓝牙', '联系人', '蓝牙', '电量', '剪贴板', 'NFC', '网络', '屏幕', '电话', '加速计', '罗盘', '设备方向', '陀螺仪', '性能', '扫码', '振动'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '微信小程序学习',
    })
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

  /*
  * cell点击
  */
  cellTap:function(e) {
    console.log(e)
    var index = e.currentTarget.dataset.index
    switch (index) {
      case 0:
      wx.navigateTo({
        url: '../iBeacon/iBeacon',
      })
      break;
      default:
      break;
    }
  }
})