// pages/picker/picker.js
var ayu = "AYU"
const page = {
  data: {
    array: [],
    array2: [],
    array3: [],
    date: '2016-09-01',
    index: 5,
    index2: 28,
    tocalendar: 0,
    age:0
  },
  bindPickerChange3: function (e) {
    this.setData({
      age: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    this.setData({
      index2: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  onShow: function(){
    // 获取缓存数据
    const jinqi = wx.getStorageSync('jinqi');
    const zhouqi = wx.getStorageSync('zhouqi');
    const zuijinriqi = wx.getStorageSync('zuijinriqi');
    const nianlin = wx.getStorageSync('nianlin');
  
    // 数据完整性检查，并设置默认值
    if (jinqi !== null && zhouqi !== null && zuijinriqi !== null && nianlin !== null) {
      console.log("show data")
      this.setData({
        index: jinqi,
        index2: zhouqi,
        age: nianlin,
        date: zuijinriqi
      });
    } else {
      // 如果缓存数据不存在，则使用默认值或提示用户
      console.warn("Some data are missing from storage. Using default values.");
      this.setData({
        index: 0,       // 默认值
        index2: 0,      // 默认值
        age: 0,         // 默认值
        date: ''        // 默认值
      })
    }
  },
  onLoad: function () {
    //月经持续时间
    ayu = wx.getStorageSync('jinqi');
    if (ayu != "AYU") {
      wx.switchTab({
        url: '../calendar/calendar'
      })
    }
    console.log('onLoad')
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    const day = date.getDate();
    var nowday = cur_year + "-" + cur_month + "-" + day;
    console.log('test1:',date,cur_month,cur_year,day);
    var arr = []
    var arr2 = []
    var arr3 = []
    for (let i = 3; i < 11; i++){ arr[i-3] = i};
    for (let i = 21; i < 36; i++){ arr2[i-21] = i};
    for (let i = 11; i < 110; i++) {arr3[i-11] = i};
    this.setData({
      array: arr,
      array2: arr2,
      //当天时间
      date: nowday,
      array3:arr3
    })
  },

  save_btn(e) {
    const date = e.currentTarget.dataset.date
    const a = e.currentTarget.dataset.array
    const a2 = e.currentTarget.dataset.arrayb
    const age = e.currentTarget.dataset.arrayc
    console.log('save_btn',date, a, a2, age)
    try {
      //经期长度
      wx.setStorageSync('jinqi', a)
      //周期长度
      wx.setStorageSync('zhouqi', a2)
      //最近一次月经
      wx.setStorageSync('zuijinriqi', date)
      //年龄
      wx.setStorageSync('nianlin', age)
    } catch (e) {
      console.warn("save fail.")
    }

    wx.switchTab({
      url: '../calendar/calendar'
    })
  }
}

Page(page)