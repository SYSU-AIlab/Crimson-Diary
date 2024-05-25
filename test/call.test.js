const { expect } = require('@jest/globals');

// 模拟 wx 对象及其方法
global.wx = {
  getStorageSync: (key) => {
    const data = {
      ipt: { tel: '12345678901' }
    };
    return data[key];
  },
  setStorageSync: jest.fn(),
  showToast: jest.fn(),
  getStorage: jest.fn((obj) => {
    obj.success({ data: { tel: '12345678901' } });
  }),
  makePhoneCall: jest.fn((obj) => {
    obj.success();
  })
};

// 模拟 setData 方法
const setData = function(data) {
  this.data = { ...this.data, ...data };
};

// 模拟医院数据
const hospitals = {
  'District1': ['HospitalA', 'HospitalB'],
  'District2': ['HospitalC', 'HospitalD']
};

// 定义 page 对象
const page = {
  data: {
    array: [],
    array2: [],
    date: '2016-09-01',
    index: 5,
    index2: 28,
    tocalendar: 0,
    ipt: {
      tel: ''
    },
    districts: Object.keys(hospitals),
    hospitals: hospitals,
    selectedDistrict: '',
    showDistricts: false,
    districtHospitals: [],
    selectedHospital: null
  },
  setData: setData,
  onLoad: function () {
    // 加载医院信息
    this.setData({
      districts: Object.keys(hospitals),
      hospitals: hospitals
    });
  },
  toggleDistricts: function () {
    this.setData({
      showDistricts: !this.data.showDistricts
    });
  },
  selectDistrict: function (e) {
    this.setData({
      selectedDistrict: e.currentTarget.dataset.district,
      districtHospitals: this.data.hospitals[e.currentTarget.dataset.district],
      selectedHospital: null,
      showDistricts: false
    });
  },
  selectHospital: function (e) {
    const hospitalIndex = e.currentTarget.dataset.index;
    this.setData({
      selectedHospital: this.data.districtHospitals[hospitalIndex]
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
  bindinput: function(e) {
    let that = this;
    let ipt = that.data.ipt;
    let key_ = e.currentTarget.dataset.key;
    let value = e.detail.value;
    ipt[key_] = value;
    that.setData({ ipt });
  },
  submit: function() {
    let that = this;
    let ipt = that.data.ipt;
    if (ipt.tel == '') {
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none'
      });
    } else {
      // 提交数据
      wx.setStorageSync('ipt', this.data.ipt);
      wx.showToast({
        title: '成功更新',
        icon: 'none'
      });
    }
  },
  sos: function() {
    let that = this;
    wx.getStorage({
      key: 'ipt',
      success: function(res) {
        that.setData({
          ipt: res.data
        });
        wx.makePhoneCall({
          phoneNumber: res.data.tel,
          success: function() {
            console.log("拨打电话成功！");
          },
          fail: function() {
            console.log("拨打电话失败！");
          }
        });
      }
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
    wx.setStorageSync.mockClear();
    wx.showToast.mockClear();
    wx.getStorage.mockClear();
    wx.makePhoneCall.mockClear();
  });

  it('应该在 onLoad 时初始化医院信息', function() {
    page.onLoad();
    expect(page.data.districts.length).toBeGreaterThan(0);
    expect(page.data.hospitals).toBe(hospitals);
  });

  it('应该在 toggleDistricts 时切换显示状态', function() {
    const initialShowDistricts = page.data.showDistricts;
    page.toggleDistricts();
    expect(page.data.showDistricts).toBe(!initialShowDistricts);
  });

  it('应该在 selectDistrict 时更新选中的地区和医院列表', function() {
    const event = {
      currentTarget: {
        dataset: {
          district: 'District1'
        }
      }
    };
    page.selectDistrict(event);
    expect(page.data.selectedDistrict).toBe('District1');
    expect(page.data.districtHospitals).toEqual(hospitals['District1']);
  });

  it('应该在 selectHospital 时更新选中的医院', function() {
    const event = {
      currentTarget: {
        dataset: {
          index: 0
        }
      }
    };
    page.selectDistrict({ currentTarget: { dataset: { district: 'District1' } } });
    page.selectHospital(event);
    expect(page.data.selectedHospital).toBe('HospitalA');
  });

  it('应该在 bindPickerChange 时更新索引', function() {
    page.bindPickerChange({ detail: { value: 2 } });
    expect(page.data.index).toBe(2);
  });

  it('应该在 bindPickerChange2 时更新索引', function() {
    page.bindPickerChange2({ detail: { value: 5 } });
    expect(page.data.index2).toBe(5);
  });

  it('应该在 bindinput 时更新输入的值', function() {
    const event = {
      currentTarget: {
        dataset: {
          key: 'tel'
        }
      },
      detail: {
        value: '12345678901'
      }
    };
    page.bindinput(event);
    expect(page.data.ipt.tel).toBe('12345678901');
  });

  it('应该在 submit 时验证并保存输入的值', function() {
    page.data.ipt.tel = '12345678901';
    page.submit();
    expect(wx.setStorageSync).toHaveBeenCalledWith('ipt', { tel: '12345678901' });
    expect(wx.showToast).toHaveBeenCalledWith({
      title: '成功更新',
      icon: 'none'
    });
  });

  it('应该在 submit 时提示输入电话号码', function() {
    page.data.ipt.tel = '';
    page.submit();
    expect(wx.showToast).toHaveBeenCalledWith({
      title: '请输入手机号码',
      icon: 'none'
    });
  });

  it('应该在 sos 时从存储中获取数据并拨打电话', function() {
    page.sos();
    expect(wx.getStorage).toHaveBeenCalled();
    expect(wx.makePhoneCall).toHaveBeenCalledWith({
      phoneNumber: '12345678901',
      success: expect.any(Function),
      fail: expect.any(Function)
    });
  });
});
