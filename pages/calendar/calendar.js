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
    // console.log(res.windowHeight * res.pixelRatio || 667,res.windowWidth)
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
    }
    // 现在的日期
    var date = new Date();

    // 根据日期，修正从用户获取的上一次月经日期
    // 传参接受的年月日
    var LastMMonth = startDateOfLastMenstrualPeriod.getMonth() + 1;;
    var LastMYear = startDateOfLastMenstrualPeriod.getFullYear();
    var day=1
    // console.log(cur_month,LastMMonth)
    // 用户输入的上次月经开始时间和当前的cur_year,cur_month匹配时：
    if(cur_year==LastMYear&&cur_month==LastMMonth){
      day = date.getDate();
      // 获取上次月经日
      var lastDay=startDateOfLastMenstrualPeriod.getDate()

      // 下面计算lastDay_continue,用于查缺补漏
      // 转换为毫秒制，下面这个变量为周期的毫秒时间
      const timeInterval=MenstrualCycle*24*3600*1000;
      // 将用户输入的上一次月经开始时间转换为毫秒时间
      var timeMP=startDateOfLastMenstrualPeriod.getTime();
      var startDateOfLastMenstrualPeriod_=new Date(timeMP-timeInterval);  // 这个变量主要用于计算lastDay_continue
      var lastDay_continue=startDateOfLastMenstrualPeriod_.getDate()
      // 这里要修正一下有关lastDay_continue的小bug，当初出现开始日为5-1
      // 那么翻页到5月的时候，会出问题，lastDay_continue=27,但指向的是3月的,而非4月
      // 跨月了，显然就不用考虑上个月的信息了，要设一个比较离谱的值
      if(cur_month-2==startDateOfLastMenstrualPeriod_.getMonth() + 1) {
        lastDay_continue=1000
      }

    }else{  // 非本月，重新计算这个月的月经开始时间，但是不一定会有，例如4-30，周期为35时，5月没有开始日期
      // today选取为当月的第一天
      var today = cur_year + "-" + cur_month + "-" + day;
      day = 1;
      // 获取上次月经日
      var lastDay=startDateOfLastMenstrualPeriod.getDate()
      // 这里的lastDay需要修正,翻页的话lastDay需要改变，这里对于月经开始日进行修正
      if(1){
        // 转换为毫秒制，下面这个变量为周期的毫秒时间
        const timeInterval=MenstrualCycle*24*3600*1000;
        // 当月第一天，作为参考标准1
        const dateToday=new Date(today);
        // 将用户输入的上一次月经开始时间转换为毫秒时间
        var timeMP=startDateOfLastMenstrualPeriod.getTime();
        // 往后翻，逻辑是这样的————将上个时间加上周期时间，直到改时间能够超过参考标准
        if(cur_year>LastMYear||(cur_month>LastMMonth&&cur_year==LastMYear)){
          while(dateToday>startDateOfLastMenstrualPeriod){
            // 下面这个变量用于补充上个月经期的遗漏量
            var lastDay_continue=startDateOfLastMenstrualPeriod.getDate()
            
            // 这里要修正一下有关lastDay_continue的小bug，当初出现开始日为4-30，周期为35，5月没有开始日
            // 那么翻页到6月的时候，会出问题，lastDay_continue=30,但指向的是4月的
            // 跨月了，显然就不用考虑上个月的信息了，要设一个比较离谱的值
            if(cur_month-2==startDateOfLastMenstrualPeriod.getMonth() + 1) {
              lastDay_continue=1000
            }

            // 更新月经开始时间
            startDateOfLastMenstrualPeriod=new Date(timeMP+timeInterval);
            console.log("1",startDateOfLastMenstrualPeriod)
            timeMP=startDateOfLastMenstrualPeriod.getTime();
            console.log("1",lastDay)
          } 
        }
        // 往前翻，这里修改的逻辑————也是逐一减去周期，直到超过参考标准
        if(cur_year<LastMYear||(cur_month<LastMMonth&&cur_year==LastMYear)){
          // 这里有思想风暴，注意想清楚
          var startDateOfLastMenstrualPeriod_=new Date(timeMP-timeInterval);  // 这个变量主要用于计算lastDay_continue
          var lastDay_continue=startDateOfLastMenstrualPeriod_.getDate()
          // 这里要修正一下有关lastDay_continue的小bug，当初出现开始日为5-1
          // 那么翻页到5月的时候，会出问题，lastDay_continue=27,但指向的是3月的,而非4月
          // 跨月了，显然就不用考虑上个月的信息了，要设一个比较离谱的值
          if(cur_month-2==startDateOfLastMenstrualPeriod_.getMonth() + 1) {
            lastDay_continue=1000
          }
          while(new Date(timeMP-timeInterval)>dateToday){
            // 重新获取上次月经日
            startDateOfLastMenstrualPeriod=new Date(timeMP-timeInterval);
            console.log("2",startDateOfLastMenstrualPeriod)
            timeMP=startDateOfLastMenstrualPeriod.getTime();
            console.log("2",lastDay)
            // 下面这个变量用于补充上个月经期的遗漏量，注意这里的逻辑也是不一样的，注意想清楚
            var startDateOfLastMenstrualPeriod_=new Date(timeMP-timeInterval);  // 这个变量主要用于计算lastDay_continue
            var lastDay_continue=startDateOfLastMenstrualPeriod_.getDate()
            // 这里要修正一下有关lastDay_continue的小bug，当初出现开始日为5-1
            // 那么翻页到5月的时候，会出问题，lastDay_continue=27,但指向的是3月的,而非4月
            // 跨月了，显然就不用考虑上个月的信息了，要设一个比较离谱的值
            if(cur_month-2==startDateOfLastMenstrualPeriod_.getMonth() + 1) {
              lastDay_continue=1000
            }
          }
        }
        
        // 下面是修正内容，修正lastDay
        // 当修正的月经开始时间的年月能与cur_year\cur_month对应起来时
        if(startDateOfLastMenstrualPeriod.getMonth()+1==cur_month&&startDateOfLastMenstrualPeriod.getFullYear()==cur_year){
          // 重新获取上次月经日
          var lastDay=startDateOfLastMenstrualPeriod.getDate()
        }else{ // 以下情况用于当本月没有经期开始日的情况，例如开始日为4-30，周期为35
          // 这里情况会比较复杂，这里就只给一个信号，说明这个月并未有经期开始时间
          var lastDay = 0
        }
      }
    }
    
    console.log("lastDay",lastDay)
    console.log("lastDay_continue",lastDay_continue)

    //将当月所有的日期都根据条件判断一下，然后放入不同的数组中
    var MenstrualPeriod = [];  // 月经期
    var SafePeriod = [];  // 安全期
    var OvulationPeriod = [];  // 排卵期
    var OvulationDay = [];  // 排卵日 
    // 排卵日——OvulationDay
    var MenstrualPeriod_test = [];  // 月经期      // 有可能有两组月经期，靠,例如上一个开始时间为5.1，周期为21，那么一月就有两组月经期
    var SafePeriod_test = [];  // 安全期
    var OvulationPeriod_test = [];  // 排卵期
    var OvulationDay_test = [];  // 排卵日，最多有两个，至少有一个,排卵日在两个月经开始时间中间

    // 获取上个月、本月、下个月的天数
    const lastMonthsDays=new Date(cur_year, cur_month-1, 0).getDate();
    const thisMonthDays=new Date(cur_year, cur_month, 0).getDate();

    // 1、计算排卵日,这里没有处理排卵日的合法性
    // 显然，用到了lastDay的地方都要分类讨论
    // 本月有月经开始日
    if(lastDay!=0){
      // 排卵日1，上一个月经开始时间与本次月经开始时间的中间时间
      var OD1=Math.floor(-(MenstrualCycle)/2+lastDay)  // 记得取整
      // 排卵日2，本次月经开始时间与下一个月经开始时间的中间时间
      var OD2=Math.floor((MenstrualCycle)/2+lastDay)  // 记得取整
      // 排卵日3，下一次月经开始时间与下下个月月经开始时间的中间时间
      var OD3=Math.floor(3*(MenstrualCycle)/2+lastDay)
      console.log("OD1",OD1,OD2,OD3)
    }else{ // 本月没有月经开始日，那么只能依靠lastDay_continue了
      var OD1=Math.floor((MenstrualCycle)/2+lastDay_continue)-lastMonthsDays
      var OD2=Math.floor(3*(MenstrualCycle)/2+lastDay_continue)-lastMonthsDays
      var OD3=Math.floor(5*(MenstrualCycle)/2+lastDay_continue)-lastMonthsDays
      console.log("OD2",OD1,OD2,OD3)      
    }
    
    // 将排卵日添加入数组中
    if(OD1>0&&OD1<=thisMonthDays){
      OvulationDay_test.push(OD1)
    }
    if(OD2>0&&OD2<=thisMonthDays){
      OvulationDay_test.push(OD2)
    }
    if(OD3>0&&OD3<=thisMonthDays){
      OvulationDay_test.push(OD3)
    }
    console.log("OvulationDay_test",OvulationDay_test)
    // 2、解决上个月遗留问题（排卵期）
    // 补充上个月的经期遗留问题
    if((lastDay_continue+MenstrualPeriodLength-lastMonthsDays)>0&&lastDay_continue!=1000){
      for(let i = 1; i<lastDay_continue+MenstrualPeriodLength-lastMonthsDays;i++){        
        MenstrualPeriod_test.push(i)
      }
    }

    // 3、查看本月是否有月经开始日
    if(lastDay!=0){
    // 4、在有月经开始日的情况下，计算该开始日的月经期,若没有，转6
      for(let i = lastDay; i<lastDay+MenstrualPeriodLength;i++){
        if(i<=thisMonthDays){
          MenstrualPeriod_test.push(i)
        }else
          break
      }
    // 5、检查本月是否存在双月经开始日,存在则更新月经期
      if (lastDay+MenstrualCycle<=thisMonthDays){
        for(let i = lastDay+MenstrualCycle; i<lastDay+MenstrualCycle+MenstrualPeriodLength;i++){
          if(i<=thisMonthDays){
            MenstrualPeriod_test.push(i)
          }
          else
            break
        }
      }
    }
    
    // 6、计算本月的排卵期（危险期），注意，当经期和排卵日相重叠时，以经期为主
    for(let i = OD2-5; i<OD2+5;i++){  // 排卵日2
      if(i!=OD2&&(!MenstrualPeriod_test.includes(i))&&i<=thisMonthDays){
        OvulationPeriod_test.push(i)
      }
    }
    for(let i = OD1-5; i<OD1+5;i++){  // 排卵日1
      if(i!=OD1&&i<=thisMonthDays&&i>0&&(!MenstrualPeriod_test.includes(i))){
        OvulationPeriod_test.push(i)
      }
    }
    for(let i = OD3-5; i<OD3+5;i++){  // 排卵日3
      if(i!=OD3&&i<=thisMonthDays&&i>0&&(!MenstrualPeriod_test.includes(i))){
        OvulationPeriod_test.push(i)
      }
    }
    
    console.log("OvulationPeriod",OvulationPeriod_test)
    
    // 7、计算本月的安全期
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
    // console.log("notSafe",notSafe)
    for (let i=1; i<=thisMonthDays;i++){
      if (!notSafe.includes(i)){
        SafePeriod_test.push(i)
      }
    }

    console.log("MenstrualPeriod_test",MenstrualPeriod_test)
    console.log("SafePeriod_test",SafePeriod_test)
    console.log("OvulationPeriod_test",OvulationPeriod_test)

    MenstrualPeriod=MenstrualPeriod_test;
    SafePeriod=SafePeriod_test;
    OvulationPeriod=OvulationPeriod_test;
    OvulationDay=OvulationDay_test;
    // 设置canva,待测试
    if(MenstrualPeriod.includes(date.getDate())){
      canvasetext = "月经期";
      canvaseNum = MenstrualPeriod.indexOf(date.getDate())+1;
    }
    if(SafePeriod.includes(date.getDate())){
      canvasetext = "安全期";
      canvaseNum = 0;  // 这个有点麻烦，暂时就不管是第几天了
    }
    if(OvulationPeriod.includes(date.getDate())){
      canvasetext = "排卵期";
      if(date.getDate()>OD2){
        canvaseNum = OvulationPeriod.indexOf(date.getDate())+2;
      }else{
        canvaseNum = OvulationPeriod.indexOf(date.getDate())+1;
      }
    }
    if(OvulationDay.includes(date.getDate())){
      canvasetext = "排卵日";
      canvaseNum = 6;
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
    ctx.fillText("今天是"+canvasetext, c2-24-22.5, c2/3-20)
    if(canvaseNum==0){
    }else if(canvaseNum<10){
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
