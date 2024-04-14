// pages/login/index.js
import {
  $http
} from '../../request/index'


Page({
  handleGetUserInfo(e) {

    const {
      userInfo
    } = e.detail;
    wx.setStorageSync("userinfo", userInfo);
    this.getData()

  },
  getData() {
    wx.cloud.init({
      env: 'xym-w2wur',
      traceUser: true
    })
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        const openid = res.result.openid
        wx.setStorageSync('openid', openid)
      }
    })

    const openid = wx.getStorageSync('openid').toString()
    const params = {
      where: {
        wxopenid: openid
      }
    }
    $http(`classes/xym`, 'GET', params).then(res => {
      const obj = res.results[0]
      if (obj) {
        wx.setStorageSync("objectId", obj.objectId)
        if (obj.dateList && obj.dateList.length) {
          wx.setStorageSync("dateList", obj.dateList)
        }
      }
      wx.navigateBack({
        delta: 1
      });
    })
  }
})