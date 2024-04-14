import regeneratorRuntime from '../../lib/runtime/runtime';
import {
    getDayAfterDatediff,
    getDaysBetween
} from "../../utils/dateFunc.js";

Page({
    data: {
        year: 0,
        month: 0,
        date: ['日', '一', '二', '三', '四', '五', '六'],
        dateArr: [],
        isToday: 0,
        isTodayWeek: false,
        todayIndex: 0,
        periodList: [],
        ovulationPeriod: [],
        predictPeriod: [],
        isTodayFormatted: 0,
    },
    onShow() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let monthFom = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1)
        let dateFom = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
        this.setData({
            year: year,
            month: month,
            isToday: '' + year + month + now.getDate(),
            isTodayFormatted: '' + year + '-' + monthFom + '-' + dateFom
        })

        this.dateInit();

    },
    dateInit: function (setYear, setMonth) {
        this.getPeriodList()
        let periodList = this.data.periodList
        let ovulationPeriod = this.data.ovulationPeriod
        let predictPeriod = this.data.predictPeriod

        //全部时间的月份都是按0~11基准，显示月份才+1
        let dateArr = []; //需要遍历的日历数组数据
        let arrLen = 0; //dateArr的数组长度
        let now = setYear ? new Date(setYear, setMonth) : new Date();
        let year = setYear || now.getFullYear();
        let nextYear = 0;
        let month = setMonth || now.getMonth(); //没有+1方便后面计算当月总天数
        let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
        // 在ios里不支持 '-' 连接的日期，所以为了兼容ios，将日期转换为 '/' 连接的
        let startWeek = new Date(year + '/' + (month + 1) + '/' + 1).getDay(); //目标月1号对应的星期
        let dayNums = new Date(year, nextMonth, 0).getDate(); //获取目标月有多少天
        let obj = {};
        let num = 0;
        if (month + 1 > 11) {
            nextYear = year + 1;
            dayNums = new Date(nextYear, nextMonth, 0).getDate();
        }
        arrLen = startWeek + dayNums;
        for (let i = 0; i < arrLen; i++) {
            if (i >= startWeek) {
                num = i - startWeek + 1;
                let monthFom = parseInt(month)
                monthFom = (monthFom + 1) < 10 ? '0' + (monthFom + 1) : (monthFom + 1)
                let dateFom = parseInt(num)
                dateFom = dateFom < 10 ? '0' + dateFom : dateFom
                let isTodayFormatted = '' + year + '-' + monthFom + '-' + dateFom
                obj = {
                    isToday: '' + year + (month + 1) + num,
                    isTodayFormatted: isTodayFormatted,
                    isInPeriodList: periodList.indexOf(isTodayFormatted) != -1,
                    isInOvulationPeriod: ovulationPeriod.indexOf(isTodayFormatted) != -1,
                    isInPredictPeriod: predictPeriod.indexOf(isTodayFormatted) != -1,
                    dateNum: num,
                }
            } else {
                obj = {};
            }
            dateArr[i] = obj;
        }
        this.setData({
            dateArr: dateArr
        })
        let nowDate = new Date();
        let nowYear = nowDate.getFullYear();
        let nowMonth = nowDate.getMonth() + 1;
        let nowWeek = nowDate.getDay();
        let getYear = setYear || nowYear;
        let getMonth = setMonth >= 0 ? (setMonth + 1) : nowMonth;
        if (nowYear == getYear && nowMonth == getMonth) {
            this.setData({
                isTodayWeek: true,
                todayIndex: nowWeek
            })
        } else {
            this.setData({
                isTodayWeek: false,
                todayIndex: -1
            })
        }
    },
    /**
     * 上月切换
     */
    lastMonth: function () {
        //全部时间的月份都是按0~11基准，显示月份才+1
        let year = this.data.month - 2 < 0 ? this.data.year - 1 : this.data.year;
        let month = this.data.month - 2 < 0 ? 11 : this.data.month - 2;
        this.setData({
            year: year,
            month: (month + 1)
        })
        this.dateInit(year, month);
    },
    /**
     * 下月切换
     */
    nextMonth: function () {
        //全部时间的月份都是按0~11基准，显示月份才+1
        let year = this.data.month > 11 ? this.data.year + 1 : this.data.year;
        let month = this.data.month > 11 ? 0 : this.data.month;
        this.setData({
            year: year,
            month: (month + 1)
        })
        this.dateInit(year, month);
    },


    getPeriodList() {
        let dateList = wx.getStorageSync('dateList') || [];
        let today = this.data.isTodayFormatted;
        const l = dateList.length
        if (l % 2 !== 0) {
            dateList.unshift(today)
        }
        let length, start, end, ovuStart, ovuEnd, predictStart, predictEnd = 0
        length = dateList.length;
        if (length != 0) {
            let daysBetween = []
            let daysBetweenOvu = []
            let daysBetweenPredict = []
            let periodList = []
            let ovulationPeriod = []
            let predictPeriod = []
            const avgPeriodTime = wx.getStorageSync("avgPeriodTime")
            for (var i = 0; i < length; i += 2) {
                start = dateList[i + 1]
                end = dateList[i]

                ovuStart = getDayAfterDatediff(start, avgPeriodTime - 19)
                ovuEnd = getDayAfterDatediff(start, avgPeriodTime - 10)

                predictStart = getDayAfterDatediff(start, avgPeriodTime)
                predictEnd = getDayAfterDatediff(start, avgPeriodTime + 4)

                daysBetween = getDaysBetween(start, end)
                daysBetween.forEach(v => periodList.push(v))

                daysBetweenOvu = getDaysBetween(ovuStart, ovuEnd)
                daysBetweenOvu.forEach(v => ovulationPeriod.push(v))

                daysBetweenPredict = getDaysBetween(predictStart, predictEnd)
                daysBetweenPredict.forEach(v => predictPeriod.push(v))
            }
            this.setData({
                periodList,
                ovulationPeriod,
                predictPeriod
            })
        }

    },


})