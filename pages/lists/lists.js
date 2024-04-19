Page({
  navigateToLink: function(e) {
    const url = e.currentTarget.dataset.url;
    // 使用 wx.navigateTo 方法跳转到目标页面
    wx.navigateTo({
      url: '/pages/' + url + '/' + url
    });
  }
});
