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
  onShow:function(){
     //月经持续时间
      var jinqi = wx.getStorageSync('jinqi');
      //月经周期
      var zhouqi = wx.getStorageSync('zhouqi');
      //上次月经日期
      var zuijinriqi = wx.getStorageSync
      ('zuijinriqi');
      var nianlin = wx.getStorageSync('nianlin');
      if(jinqi!=null&&zhouqi!=null&&zuijinriqi!=null&&nianlin!=null){
        this.setData({
          index:jinqi,
          index2:zhouqi,
          age:nianlin,
          date:zuijinriqi
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
    var arr = []
    var arr2 = []
    var arr3 = []
    for (let i = 3; i < 11; i++){ arr[i] = i}
    for (let i = 21; i < 36; i++){ arr2[i] = i}
    for (let i = 0; i < 110; i++) {arr3[i] = i}
    arr = arr.filter(item => item !== null);
    arr2 = arr2.filter(item => item !== null);
    arr3 = arr3.filter(item => item !== null);
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
    console.log(date, a, a2, age)
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
    }

    wx.switchTab({
      url: '../calendar/calendar'
    })
  }
}

Page(page)