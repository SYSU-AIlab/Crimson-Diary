var canvasetext = "";
var canvaseNum = 1;
var lastMenstrualPeriodLength = 7;  // 月经期：通常为3-7天
var lastMenstrualCycle = 28;  // 月经周期：通常为28天
var startDateOfLastMenstrualPeriod = new Date("2023-04-17");  // 月经开始时间
const page = {
  data: {
    // hasEmptyGrid 变量控制是否渲染空格子，若当月第一天是星期天，就不应该渲染空格子
    hasEmptyGrid: false,
    yue: [],
    anquan: [],
    weixian: [],
    pailuanri: [],
    canvasewidth: 375,
    // OvulationDay:0
  },

  // 控制scroll-view高度
  getSystemInfo() {
    //获得系统数据
    const res = wx.getSystemInfoSync();
    //console.log(res.windowWidth)
    this.setData({
      scrollViewHeight: res.windowHeight * res.pixelRatio || 667,
      canvasewidth: res.windowWidth
    });

    return res.windowWidth;
  },

  // 获取当月共多少天，传年和月
  getThisMonthDays(year, month) {
    //通过Date来获取当月天数
    return new Date(year, month, 0).getDate();
  },

  // 获取当月第一天星期几，传年和月
  getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },

  // 计算当月1号前空了几个格子
  calculateEmptyGrids(year, month) {
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
    let empytGrids = [];
    if (firstDayOfWeek > 0) {
      //将不渲染的添加进入empytGrids数组
      for (let i = 0; i < firstDayOfWeek; i++) {
        empytGrids.push(i);
      }
      this.setData({
        hasEmptyGrid: true,
        empytGrids
      });
      // console.log(empytGrids)
    } else {
      this.setData({
        hasEmptyGrid: false,
        empytGrids: []
      });
    }
  },

  // 绘制当月天数占的格子
  calculateDays(year, month) {
    let days = [];
    //获得当月共有多少天
    const thisMonthDays = this.getThisMonthDays(year, month);
    for (let i = 1; i <= thisMonthDays; i++) {
      days.push(i);
    }
    //设置当月天数
    this.setData({
      days
    });
  },

  // 计算各种时期的子函数传参为两个排卵日，经期、安全期、排卵期
  ComputePeriod(OD1,OD2,lastDay,MenstrualPeriodLength,thisMonthDays,lastMonthsDays,MenstrualPeriod_test,SafePeriod_test,OvulationPeriod_test){
    // 本月的月经开始日在1号
    if(OD1==-32){
      // 计算经期
      for(let i = 1; i<=MenstrualPeriodLength;i++){
        MenstrualPeriod_test.push(i)
      }
      // 计算排卵期
      for(let i = OD2-5; i<OD2+5;i++){
        if(i!=OD2){
          OvulationPeriod_test.push(i)
        }
      }
      // 计算安全期
      var notSafe=[];
      for (const i of MenstrualPeriod_test) {
        notSafe.push(i)
      }
      for (const i of OvulationPeriod_test) {
        notSafe.push(i)
      }
      notSafe.push(OD2)
      for (let i=1; i<=thisMonthDays;i++){
        if (!notSafe.includes(i)){
          SafePeriod_test.push(i)
        }
      }
    }else{  // 不在本月1号
      // case1:上个月的排卵期延续到本月
      // case2:上个月的排卵期没有延续到本月
      // 计算经期
      for(let i = lastDay; i<lastDay+MenstrualPeriodLength;i++){
        if(i<=thisMonthDays){
          MenstrualPeriod_test.push(i)
        }
      }
      // 计算排卵期
      for(let i = OD2-5; i<OD2+5;i++){
        if(i!=OD2&&i<=thisMonthDays&&i>0){
          OvulationPeriod_test.push(i)
        }
      }
      for(let i = OD1-5; i<OD1+5;i++){
        if(i!=OD1&&i<=thisMonthDays&&i>0){
          OvulationPeriod_test.push(i)
        }
      }
      // 计算安全期
      var notSafe=[];
      for (const i of MenstrualPeriod_test) {
        notSafe.push(i)
      }
      for (const i of OvulationPeriod_test) {
        notSafe.push(i)
      }
      notSafe.push(OD1)
      notSafe.push(OD2)
      for (let i=1; i<=thisMonthDays;i++){
        if (!notSafe.includes(i)){
          SafePeriod_test.push(i)
        }
      }
    }
  },

  // 计算各种时期 TODO：查看并修改计算逻辑
  viewyue(cur_year, cur_month) {
    try {
      //月经持续时间
      var MenstrualPeriodLength = wx.getStorageSync('jinqi');
      //月经周期
      var MenstrualCycle = wx.getStorageSync('zhouqi');
      //上次月经日期
      var startDateOfLastMenstrualPeriod = new Date(wx.getStorageSync('zuijinriqi'));
    } catch (e) {
      // Do something when catch error
      var MenstrualPeriodLength = lastMenstrualPeriodLength;
      var MenstrualCycle = lastMenstrualCycle;
      // 没有获得输入时，按照统计规律、重新计算本月月经开始时间
      var daysOfLastMonth= new Date(cur_year, cur_month-1, 0).getDate(); // 获取上个月的天数
      var theDay = startDateOfLastMenstrualPeriod.getDate();  // 上个月的开始月经日
      if(theDay+MenstrualCycle>daysOfLastMonth){
        startDateOfLastMenstrualPeriod = new Date(cur_year,cur_month-1,theDay+MenstrualCycle);
      }else{
        startDateOfLastMenstrualPeriod = new Date(cur_year,cur_month,theDay+MenstrualCycle-daysOfLastMonth);
      }
    }
    //当前年月日
    var date = new Date();
    const day = date.getDate();
    var today = cur_year + "-" + cur_month + "-" + day;
    //将当月所有的日期都根据条件判断一下，然后放入不同的数组中
    var MenstrualPeriod = [];  // 月经期
    var SafePeriod = [];  // 安全期
    var OvulationPeriod = [];  // 排卵期
    var OvulationDay = [];  // 排卵日 
    // 排卵日——OvulationDay
    // 获取上次月经日
    const lastDay=startDateOfLastMenstrualPeriod.getDate()

    // 计算排卵日（我们提供的算法以排卵日为中心）
    console.log("lastDay",lastDay)
    var MenstrualPeriod_test = [];  // 月经期
    var SafePeriod_test = [];  // 安全期
    var OvulationPeriod_test = [];  // 排卵期
    var OvulationDay_test = [];  // 排卵日，最多有两个，至少有一个
    // 需要两个排卵日，具体包括位于月经日以前的排卵日以及位于月经日之后的排卵日
    const thisMonthDays=new Date(cur_year, cur_month, 0).getDate();
    const lastMonthsDays=new Date(cur_year, cur_month-1, 0).getDate();
    if(lastDay == 1){
      const OD1=-32;  // 前
      const OD2=lastDay+MenstrualCycle-14;  // 后
      console.log("OD",OD2,MenstrualCycle)
      this.ComputePeriod(OD1,OD2,lastDay,MenstrualPeriodLength,thisMonthDays,lastMonthsDays,MenstrualPeriod_test,SafePeriod_test,OvulationPeriod_test);
      OvulationDay_test.push(OD2);
    }else{
      // // 在传入前进行修正？
      // const OD1=lastDay-14>0?lastDay-14:lastDay-14+lastMonthsDays;
      // const OD2=lastDay+MenstrualCycle-14<=thisMonthDays?lastDay+MenstrualCycle-14:lastDay+MenstrualCycle-14-thisMonthDays;
      // 在传入后进行修正？
      const OD1=lastDay-14;
      const OD2=lastDay+MenstrualCycle-14;
      console.log('OD', OD1, OD2,lastMonthsDays,thisMonthDays)
      this.ComputePeriod(OD1,OD2,lastDay,MenstrualPeriodLength,thisMonthDays,lastMonthsDays,MenstrualPeriod_test,SafePeriod_test,OvulationPeriod_test);
      if(OD1>0){
        OvulationDay_test.push(OD1);
      }
      if(OD2<=thisMonthDays){
        OvulationDay_test.push(OD2);
      }
      console.log(OvulationDay_test)
    }
    MenstrualPeriod=MenstrualPeriod_test;
    SafePeriod=SafePeriod_test;
    OvulationPeriod=OvulationPeriod_test;
    OvulationDay=OvulationDay_test;

    // 下面是原版的改进版，但算法仍沿用的别人的，不再使用
    // 下面的逻辑用于处理没有跨月的经期
    for (let i = 1; i <= this.getThisMonthDays(cur_year, cur_month); i++) {
      var iterateDay = cur_year + "-" + cur_month + "-" + i;
      //比初始月经数据要小的日期，就使用前一次月经日期
      if (i < lastDay) {
        var dateDiff=(i+MenstrualCycle-lastDay)%MenstrualCycle
        // console.log("datediff",dateDiff)
      } else {
        var dateDiff=(i-lastDay)%MenstrualCycle
        // console.log("datediff",dateDiff)
      }
      //月经期
      if (dateDiff < MenstrualPeriodLength) {
        MenstrualPeriod.push(i)
        if (today == iterateDay) {
          canvasetext = "月经期";
          canvaseNum = dateDiff + 1;
          console.log('月经期',i,canvaseNum)
        }
      }
      // 安全期1
      if (MenstrualPeriodLength <= dateDiff && dateDiff < MenstrualCycle - 19) {
        SafePeriod.push(i)
        if (today == iterateDay) {
          canvasetext = "安全期";
          canvaseNum = dateDiff - MenstrualPeriodLength + 1;
          console.log('安全期',i,canvaseNum)
        }
      }
      // 排卵期
      if (MenstrualCycle - 19 <= dateDiff && dateDiff < MenstrualCycle - 10) {
         if(dateDiff!=MenstrualCycle-14){
           OvulationPeriod.push(i)
           if (today == iterateDay) {
            canvasetext = "排卵期";
            canvaseNum = dateDiff - MenstrualPeriodLength + 20;
            console.log('排卵期',i,canvaseNum)
          }
         }
         if(dateDiff==MenstrualCycle-14){
            this.setData({
              OvulationDay:i
            })
            if (today == iterateDay) {
              canvasetext = "排卵日";
              canvaseNum = dateDiff - MenstrualPeriodLength + 20;
              console.log('排卵日',i,canvaseNum)
            }
        }
      }
      // 安全期2
      if (MenstrualCycle - 10 <= dateDiff && dateDiff < MenstrualCycle) { // 28的周期
        SafePeriod.push(i)
        if (today == iterateDay) {
          canvasetext = "安全期";
          canvaseNum = dateDiff - MenstrualPeriodLength + 11;
          console.log('安全期',i,canvaseNum)
        }
      }

    }

    this.setData({
      yue: MenstrualPeriod,
      anquan: SafePeriod,
      weixian: OvulationPeriod,
      pailuanri: OvulationDay
    })
  },

  // 初始化数据
  onShow(options) {

    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    //调用calculateDays计算当月的天数
    this.calculateDays(cur_year, cur_month);
    // 计算各种时期
    this.viewyue(cur_year, cur_month)

    var canvasewidth = this.getSystemInfo()
    //canvas绘图
    const ctx = wx.createCanvasContext('ayuCanvas')
    var c2 = canvasewidth / 2
    // Draw coordinates
    ctx.arc(c2, -c2 * 2, c2 * 3, 0, 2 * Math.PI)
    ctx.setFillStyle('#FF5073')
    ctx.fill()

    ctx.setFontSize(15)
    ctx.setFillStyle('#FFFFFF')
    ctx.fillText(canvasetext, c2-24, c2/3-20)
    console.log('diiaoo',c2-24, c2/3-20,c2-15, c2-40)
    if(canvaseNum<10){
      ctx.fillText("第", c2-24, c2/3)
      ctx.fillText(canvaseNum, c2-6, c2/3)
      ctx.fillText("天", c2+6, c2/3)
    }else{
      ctx.fillText("第", c2-24, c2/3)
      ctx.fillText(canvaseNum, c2-6, c2/3)
      ctx.fillText("天", c2+15, c2/3)
    }
    ctx.draw()

    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    //调用calculateEmptyGrids计算出当月空出几个格子，传入年和月
    this.calculateEmptyGrids(cur_year, cur_month);
    //获得系统消息
    this.getSystemInfo();
    this.setData({
      cur_year,
      cur_month,
      weeks_ch
    })
  },

  // 切换控制年月，TODO：这里的逻辑有问题，需要更新数据
  handleCalendar(e) {
    const handle = e.currentTarget.dataset.handle;
    const cur_year = this.data.cur_year;
    const cur_month = this.data.cur_month;
    var newMonth=cur_month
    var newYear=cur_year
    //上一个月，点击了prev
    if (handle === 'prev') {
      newMonth = cur_month - 1;
      newYear = cur_year;
      //如果是一月月，就上一年
      if (newMonth < 1) {
        newYear = cur_year - 1;
        newMonth = 12;
      }
    } else {//下一个月
      newMonth = cur_month + 1;
      newYear = cur_year;
      if (newMonth > 12) {
        newYear = cur_year + 1;
        newMonth = 1;
      }
    }
    //获取当月天数
    this.calculateDays(newYear, newMonth);
    //获得当月开头要空的格子
    this.calculateEmptyGrids(newYear, newMonth);
    this.viewyue(newYear, newMonth)
    // 弹出弹窗，询问是否更新上月的信息，并微调
    // 如果更新，那么跳转页面，并重新生成该月的各个时期
    this.setData({
      cur_year: newYear,
      cur_month: newMonth
    })
  },
  
  //微信的分享方法
  onShareAppMessage() {
    return {
      title: '男朋友',
      desc: '拒绝大血崩，让他来照顾你的大姨妈',
      path: 'pages/calendar/calendar'
    }
  }
}

Page(page)