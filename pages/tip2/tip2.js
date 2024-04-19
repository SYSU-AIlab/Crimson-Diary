Page({
  data: {
    images: [
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/nan1.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/nan2.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/nan3.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/nan4.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/nan5.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/nan6.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/nan7.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/nan8.jpg",
      "cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/nan9.jpg"
    ]
  },
  scrollTop: function() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300  // 滚动动画持续时间，单位 ms
    });
  },

  onLoad: function(options) {
    // 可以在这里初始化页面数据或逻辑
  }
});
