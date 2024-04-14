const baseUrl = 'https://m7mqr0oh.lc-cn-n1-shared.com/1.1/'

export const $http = (url, method, data = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method,
      data,
      header: {
        'x-avoscloud-application-id': 'm7MqR0ohghp4q78bJ5L2EstT-gzGzoHsz',
        'x-avoscloud-session-token': 'm7MqR0ohghp4q78bJ5L2EstT-gzGzoHsz',
        'x-avoscloud-application-key': '请输入自己的leancloud-key'
      },
      success: res => {
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}