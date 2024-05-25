// 引入必要的测试模块
const { expect } = require('@jest/globals');

// 模拟 wx 对象及其方法
global.wx = {
  getStorageSync: (key) => {
    const data = {
      jinqi: 7,
      zhouqi: 28,
      zuijinriqi: '2023-04-17',
      jinqi_index: 4,
      zhouqi_index: 7,
      nianlin_index: 25
    };
    return data[key];
  },
  setStorageSync: jest.fn(),
  switchTab: jest.fn()
};

// 模拟 setData 方法
const setData = function(data) {
  this.data = { ...this.data, ...data };
};

// 定义 page 对象
const page = {
  data: {
    array: [],
    array2: [],
    array3: [],
    date: '2016-09-01',
    index: 5,
    index2: 28,
    tocalendar: 0,
    age: 0
  },
  setData: setData,
  bindPickerChange3: function (e) {
    this.setData({
      age: e.detail.value
    });
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    });
  },
  bindPickerChange2: function (e) {
    this.setData({
      index2: e.detail.value
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    });
  },
  onShow: function() {
    var jingqi_index = wx.getStorageSync('jinqi_index');
    var zhouqi_index = wx.getStorageSync('zhouqi_index');
    var zuijinriqi = wx.getStorageSync('zuijinriqi');
    var nianlin_index = wx.getStorageSync('nianlin_index');
  
    if (jingqi_index !== null && zhouqi_index !== null && zuijinriqi !== null && nianlin_index !== null) {
      console.log("show data", jingqi_index, zhouqi_index, zuijinriqi, nianlin_index);
      this.setData({
        index: jingqi_index,
        index2: zhouqi_index,
        age: nianlin_index,
        date: zuijinriqi
      });
    } else {
      console.warn("Some data are missing from storage. Using default values.");
      this.setData({
        index: 0,
        index2: 0,
        age: 0,
        date: ''
      });
    }
  },
  onLoad: function () {
    ayu = wx.getStorageSync('jinqi');
    if (ayu != "AYU") {
      wx.switchTab({
        url: '../calendar/calendar'
      });
    }
    console.log('onLoad');
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    const day = date.getDate();
    var nowday = cur_year + "-" + cur_month + "-" + day;
    var arr = [];
    var arr2 = [];
    var arr3 = [];
    for (let i = 3; i < 11; i++) { arr[i-3] = i; }
    for (let i = 21; i < 36; i++) { arr2[i-21] = i; }
    for (let i = 11; i < 110; i++) { arr3[i-11] = i; }
    this.setData({
      array: arr,
      array2: arr2,
      date: nowday,
      array3: arr3
    });
  },
  save_btn(e) {
    const date = e.currentTarget.dataset.date;
    const index_jingqi = e.currentTarget.dataset.jingqi_index;
    const index_zhouqi = e.currentTarget.dataset.zhouqi_index;
    const index_age = e.currentTarget.dataset.age_index;
    const jinqi = e.currentTarget.dataset.jinqi;
    const zhouqi = e.currentTarget.dataset.zhouqi;
    console.log('save_btn', date, index_jingqi, index_zhouqi, index_age);
    try {
      wx.setStorageSync('jinqi_index', index_jingqi);
      wx.setStorageSync('jinqi', jinqi);
      wx.setStorageSync('zhouqi_index', index_zhouqi);
      wx.setStorageSync('zhouqi', zhouqi);
      wx.setStorageSync('zuijinriqi', date);
      wx.setStorageSync('nianlin_index', index_age);
    } catch (e) {
      console.warn("save fail.");
    }

    wx.switchTab({
      url: '../calendar/calendar'
    });
  }
};

// 模拟 Page 函数
function Page(pageConfig) {
  Object.assign(page, pageConfig);
}

// 执行模拟 Page 函数
Page(page);

// 测试
describe('Picker Page', function() {
  beforeEach(() => {
    // 每次测试前重置 wx.setStorageSync 和 wx.switchTab 的模拟
    wx.setStorageSync.mockClear();
    wx.switchTab.mockClear();
  });

  it('应该在 onLoad 时初始化数组和日期', function() {
    page.onLoad();
    expect(page.data.array.length).toBe(8);
    expect(page.data.array2.length).toBe(15);
    expect(page.data.array3.length).toBe(99);
    expect(page.data.date.split('-').length).toBe(3); // 验证日期格式
  });

  it('应该在 onShow 时从缓存加载数据', function() {
    page.onShow();
    expect(page.data.index).toBe(4);
    expect(page.data.index2).toBe(7);
    expect(page.data.age).toBe(25);
    expect(page.data.date).toBe('2023-04-17');
  });

  it('应该在 bindPickerChange 时更新索引', function() {
    page.bindPickerChange({ detail: { value: 2 } });
    expect(page.data.index).toBe(2);
  });

  it('应该在 bindPickerChange2 时更新索引', function() {
    page.bindPickerChange2({ detail: { value: 5 } });
    expect(page.data.index2).toBe(5);
  });

  it('应该在 bindPickerChange3 时更新年龄', function() {
    page.bindPickerChange3({ detail: { value: 30 } });
    expect(page.data.age).toBe(30);
  });

  it('应该在 bindDateChange 时更新日期', function() {
    page.bindDateChange({ detail: { value: '2023-05-01' } });
    expect(page.data.date).toBe('2023-05-01');
  });

  it('应该在 save_btn 时保存数据并切换页面', function() {
    const event = {
      currentTarget: {
        dataset: {
          date: '2023-05-01',
          jingqi_index: 4,
          zhouqi_index: 7,
          age_index: 25,
          jinqi: 7,
          zhouqi: 28
        }
      }
    };
    page.save_btn(event);
    expect(wx.setStorageSync).toHaveBeenCalledWith('zuijinriqi', '2023-05-01');
    expect(wx.setStorageSync).toHaveBeenCalledWith('jinqi_index', 4);
    expect(wx.setStorageSync).toHaveBeenCalledWith('zhouqi_index', 7);
    expect(wx.setStorageSync).toHaveBeenCalledWith('nianlin_index', 25);
    expect(wx.switchTab).toHaveBeenCalledWith({ url: '../calendar/calendar' });
  });
});
