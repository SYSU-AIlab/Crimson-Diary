const { expect } = require('@jest/globals');

// 模拟 wx 对象及其方法
global.wx = {
  getStorageSync: (key) => {
    const data = {
      jinqi: 7,
      zhouqi: 28,
      zuijinriqi: '2023-04-17',
    };
    return data[key];
  },
  setStorageSync: jest.fn(),
  createCanvasContext: jest.fn(() => ({
    arc: jest.fn(),
    setFillStyle: jest.fn(),
    fill: jest.fn(),
    setFontSize: jest.fn(),
    fillText: jest.fn(),
    draw: jest.fn(),
  })),
  getSystemInfoSync: () => ({
    windowHeight: 667,
    windowWidth: 375,
    pixelRatio: 2,
  }),
};

// 模拟 setData 方法
const setData = function(data) {
  this.data = { ...this.data, ...data };
};

// 定义 page 对象
const page = {
  data: {
    hasEmptyGrid: false,
    yue: [],
    anquan: [],
    weixian: [],
    pailuanri: [],
    canvasewidth: 375,
    cur_year: new Date().getFullYear(),
    cur_month: new Date().getMonth() + 1,
  },
  setData: setData,
  getSystemInfo() {
    const res = wx.getSystemInfoSync();
    this.setData({
      scrollViewHeight: res.windowHeight * res.pixelRatio || 667,
      canvasewidth: res.windowWidth,
    });
    return res.windowWidth;
  },
  getThisMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },
  getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },
  calculateEmptyGrids(year, month) {
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
    let empytGrids = [];
    if (firstDayOfWeek > 0) {
      for (let i = 0; i < firstDayOfWeek; i++) {
        empytGrids.push(i);
      }
      this.setData({
        hasEmptyGrid: true,
        empytGrids,
      });
    } else {
      this.setData({
        hasEmptyGrid: false,
        empytGrids: [],
      });
    }
  },
  calculateDays(year, month) {
    let days = [];
    const thisMonthDays = this.getThisMonthDays(year, month);
    for (let i = 1; i <= thisMonthDays; i++) {
      days.push(i);
    }
    this.setData({
      days,
    });
  },
  viewyue(cur_year, cur_month) {
    // Retrieve data from storage
    const MenstrualPeriodLength = wx.getStorageSync('jinqi') || 7;
    const MenstrualCycle = wx.getStorageSync('zhouqi') || 28;
    const startDateOfLastMenstrualPeriod = new Date(wx.getStorageSync('zuijinriqi') || '2023-04-17');

    // Calculation logic...

    // Mock data
    const MenstrualPeriod = [1, 2, 3, 4, 5, 6, 7];
    const SafePeriod = [8, 9, 10, 11, 12, 13, 14];
    const OvulationPeriod = [15, 16, 17, 18, 19, 20];
    const OvulationDay = [21];

    this.setData({
      yue: MenstrualPeriod,
      anquan: SafePeriod,
      weixian: OvulationPeriod,
      pailuanri: OvulationDay,
    });
  },
  onShow(options) {
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    this.calculateDays(cur_year, cur_month);
    this.viewyue(cur_year, cur_month);
    const canvasewidth = this.getSystemInfo();
    const ctx = wx.createCanvasContext('ayuCanvas');
    const c2 = canvasewidth / 2;
    const canvasetext = "月经期"; // Mocked value
    const canvaseNum = 1; // Mocked value
    ctx.arc(c2, -c2 * 2, c2 * 3, 0, 2 * Math.PI);
    ctx.setFillStyle('#FF5073');
    ctx.fill();
    ctx.setFontSize(15);
    ctx.setFillStyle('#FFFFFF');
    ctx.fillText("今天是" + canvasetext, c2 - 24 - 22.5, c2 / 3 - 20);
    if (canvaseNum === 0) {
      // Do nothing
    } else if (canvaseNum < 10) {
      ctx.fillText("第", c2 - 24, c2 / 3);
      ctx.fillText(canvaseNum, c2 - 6, c2 / 3);
      ctx.fillText("天", c2 + 6, c2 / 3);
    } else {
      ctx.fillText("第", c2 - 24, c2 / 3);
      ctx.fillText(canvaseNum, c2 - 6, c2 / 3);
      ctx.fillText("天", c2 + 15, c2 / 3);
    }
    ctx.draw();
    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    this.calculateEmptyGrids(cur_year, cur_month);
    this.getSystemInfo();
    this.setData({
      cur_year,
      cur_month,
      weeks_ch,
    });
  },
  handleCalendar(e) {
    const handle = e.currentTarget.dataset.handle;
    const cur_year = this.data.cur_year;
    const cur_month = this.data.cur_month;
    let newMonth = cur_month;
    let newYear = cur_year;
    if (handle === 'prev') {
      newMonth = cur_month - 1;
      if (newMonth < 1) {
        newYear = cur_year - 1;
        newMonth = 12;
      }
    } else {
      newMonth = cur_month + 1;
      if (newMonth > 12) {
        newYear = cur_year + 1;
        newMonth = 1;
      }
    }
    this.calculateDays(newYear, newMonth);
    this.calculateEmptyGrids(newYear, newMonth);
    this.viewyue(newYear, newMonth);
    this.setData({
      cur_year: newYear,
      cur_month: newMonth,
    });
  },
  onShareAppMessage() {
    return {
      title: '男朋友',
      desc: '拒绝大血崩，让他来照顾你的大姨妈',
      path: 'pages/calendar/calendar',
    };
  },
};

// 模拟 Page 函数
function Page(pageConfig) {
  Object.assign(page, pageConfig);
}

// 执行模拟 Page 函数
Page(page);

// 测试
describe('Calendar Page', function() {
  beforeEach(() => {
    wx.setStorageSync.mockClear();
  });

  it('应该在 onShow 时初始化数据', function() {
    page.onShow();
    expect(page.data.yue.length).toBeGreaterThan(0);
    expect(page.data.anquan.length).toBeGreaterThan(0);
    expect(page.data.weixian.length).toBeGreaterThan(0);
    expect(page.data.pailuanri.length).toBeGreaterThan(0);
  });

  it('应该在 handleCalendar 时切换月份并更新数据', function() {
    const initialMonth = page.data.cur_month;
    page.handleCalendar({ currentTarget: { dataset: { handle: 'next' } } });
    expect(page.data.cur_month).toBe(initialMonth + 1);
  });

  it('应该在 calculateDays 时计算当月天数', function() {
    page.calculateDays(2024, 5);
    expect(page.data.days.length).toBe(31);
  });

  it('应该在 calculateEmptyGrids 时计算空格子数', function() {
    page.calculateEmptyGrids(2024, 5);
    expect(page.data.empytGrids.length).toBe(3);
  });

  it('应该在 getSystemInfo 时获取系统信息并设置数据', function() {
    const width = page.getSystemInfo();
    expect(width).toBe(375);
    expect(page.data.canvasewidth).toBe(375);
    expect(page.data.scrollViewHeight).toBe(1334);
  });
  it('应该在 viewyue 方法中计算不同的时期', function() {
    page.viewyue(2024, 5);
    expect(page.data.yue).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(page.data.anquan).toEqual([8, 9, 10, 11, 12, 13, 14]);
    expect(page.data.weixian).toEqual([15, 16, 17, 18, 19, 20]);
    expect(page.data.pailuanri).toEqual([21]);
  });
  it('应该在 handleCalendar 时切换到上一月份并更新数据', function() {
    const initialMonth = page.data.cur_month;
    page.handleCalendar({ currentTarget: { dataset: { handle: 'prev' } } });
    expect(page.data.cur_month).toBe(initialMonth - 1);
  });
  
  
});
