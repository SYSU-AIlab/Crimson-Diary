Page({
  data: {
    images: [
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/jisu1.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/jisu2.jpg"
    ]
  },
  scrollTop: function() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300  // 滚动动画持续时间，单位 ms
    });
  },
  onLoad: function(options) {
    // 页面创建时执行
  }
});
