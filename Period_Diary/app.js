//app.js
import {
  $http
} from './request/index.js'

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

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

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
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
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})