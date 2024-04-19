Page({
  data: {
    images: [
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/you1.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/you2.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/you3.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/you4.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/you5.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/you6.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/you7.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/you8.jpg"
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
