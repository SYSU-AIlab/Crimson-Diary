const { expect } = require('@jest/globals');

// 模拟 wx 对象及其方法
global.wx = {
  navigateTo: jest.fn()
};

// 模拟 setData 方法
const setData = function(data) {
  this.data = { ...this.data, ...data };
};

// 定义 page 对象
const page = {
  setData: setData,
  navigateToLink: function(e) {
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: '/pages/' + url + '/' + url
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
describe('Navigate Page', function() {
  beforeEach(() => {
    wx.navigateTo.mockClear();
  });

  it('应该在 navigateToLink 时跳转到目标页面', function() {
    const event = {
      currentTarget: {
        dataset: {
          url: 'examplePage'
        }
      }
    };
    page.navigateToLink(event);
    expect(wx.navigateTo).toHaveBeenCalledWith({
      url: '/pages/examplePage/examplePage'
    });
  });
});
