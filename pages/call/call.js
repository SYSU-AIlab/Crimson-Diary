// pages/call/call.js
var ayu = "AYU"
const page = {
  data: {
    array: [],
    array2: [],
    date: '2016-09-01',
    index: 5,
    index2: 28,
    tocalendar: 0,
    ipt:{
      tel:''
    }
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
  bindinput: function(e){
    let that = this
    let ipt = that.data.ipt
    let key_ = e.currentTarget.dataset.key
    let value = e.detail.value
    console.log(key_)
    ipt[key_] = value
    console.log(ipt)

  },
  submit: function(){
    let that = this
    let ipt = that.data.ipt
    if(ipt.tel == ''){
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none'
      })
    } else{
      //提交数据
      wx.setStorage({
        key: 'ipt',
        data: this.data.ipt
      })
      wx.showToast({
        title: '成功更新',
        icon: 'none'
      })
      console.log(ipt)
    }
  },
  sos: function(){
    let that = this
    wx.getStorage({
      key: 'ipt',
      success: function(res){
        console.log(res.data)
        that.setData({
          ipt: res.data
        })
        wx.makePhoneCall({
          phoneNumber: res.data.tel,
          success: function () {
            console.log("拨打电话成功！")
        },
        fail: function () {
            console.log("拨打电话失败！")
        }
        })
      }
    })
    // let phone = this.data.ipt.tel
    // console.log(phone)
    
  }
}

Page(page)