// 假设是在 tip1.js 中
Page({
  data: {
    images: []
  },
  scrollTop: function() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300  // 滚动动画持续时间，单位 ms
    });
  },
  onLoad: function(options) {
    const fileIDs = [
      'cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/tip1-1.jpg',
      'cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/tip1-2.jpg',
      'cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/tip1-3.jpg',
      'cloud://cloud1-8ghk237mf77b9d98.636c-cloud1-8ghk237mf77b9d98-1325635063/image/tip1-4.jpg'
    ];

    wx.cloud.getTempFileURL({
      fileList: fileIDs.map(fileID => ({ fileID })),
      success: res => {
        const urls = res.fileList.map(file => file.tempFileURL); // 提取临时 URL
        this.setData({ images: urls });
      },
      fail: console.error
    });
  }
});
