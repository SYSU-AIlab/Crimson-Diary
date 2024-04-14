// record.js
import regeneratorRuntime from '../../lib/runtime/runtime';
import {
    getDateDiff,
    average
} from "../../utils/dateFunc.js";
import {
    $http
} from '../../request/index'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        dateList: [],
        isInPeriod: true,
        today: '',
        year: 0,
        month: 0,
        totalDay: 0,
        periodCount: 0,
        nextPeriodCount: 0,
        avgPeriodTime: 29,
        periodIntervalList: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onShow() {
        const dateList = wx.getStorageSync("dateList") || [];
        const isInPeriod = dateList.length % 2 - 1;
        // console.log(isInPeriod)
        this.getCurrentDate();
        this.getPeriodCount();

        this.setData({
            isInPeriod,
            dateList
        })
    },

    //绑定点击事件，判断输入的时间是否合理
    bindDateChange(e) {
        // console.log('picker发送选择改变，携带值为', e.detail.value)
        // this.getCurrentDate();

        let dateList = wx.getStorageSync("dateList") || [];
        let val = e.detail.value

        if (!dateList.length) { // 无数据直接记录
            dateList.unshift(e.detail.value);
        } else if (dateList.length % 2 === 0) { // 记录开始日期，校验开始日期是否正确
            if (this.isStartValid(e.detail.value)) {
                dateList.unshift(e.detail.value);
            } else {
                wx.showToast({
                    title: '该记录不符合规则，历史记录请到"我的"页面查看',
                    icon: 'none',
                    duration: 2000
                })
            }
        } else { // 记录开始日期，校验开始日期是否正确
            const start = dateList[0];
            let diff = getDateDiff(start, val);

            if (diff < 8 && diff > 0 && this.isEndValid(val)) {
                dateList.unshift(e.detail.value);
                dateList.sort().reverse()
            } else {
                wx.showToast({
                    title: '该记录不符合规则，历史记录请到"我的"页面查看',
                    icon: 'none',
                    duration: 2000
                })
            }
        }

        this.saveData(dateList)
        wx.setStorageSync("dateList", dateList);
        this.setData({
            dateList
        })
        this.onShow();
    },

    saveData(dateList) {
        const objectId = wx.getStorageSync("objectId")

        if (objectId) {
            const params = {
                dateList
            }
            $http(`classes/xym/${objectId}`, 'PUT', params).then(res => {
                console.log(res, '修改成功 =========')
            })
        } else {
            const params = {
                wxopenid: wx.getStorageSync("openid"),
                dateList
            }
            $http(`classes/xym`, 'POST', params).then(res => {
                if (res.objectId) {
                    wx.setStorageSync("objectId", res.objectId)
                }
            })
        }
    },

    // 检查月经开始日期是否与其他经期记录有交叉
    isStartValid(value) {
        const dateList = wx.getStorageSync("dateList")
        for (let i = 0; i < dateList.length; i += 2) {
            if (value > dateList[i]) {
                return true
            } else if (value >= dateList[i + 1]) {
                return false
            }
        }
        return true
    },

    // 检查月经结束日期是否与其他经期记录有交叉
    isEndValid(value) {
        const dateList = wx.getStorageSync("dateList")
        if (dateList.length === 1) { // 无历史记录，直接返回true
            return true
        }
        if (dateList[0] > dateList[2]) { // 记录最新的，直接返回true
            return true
        }

        for (let i = 2; i < dateList.length; i += 2) {
            // 插入历史记录时，开始时间，结束时间都应小于过去某个开始时间
            if (dateList[i] > dateList[0] && dateList[i] <= value) {
                return false
            }
            if (i + 2 < dateList.length && dateList[i + 2] < dateList[0]) {
                return true
            }
        }
        return true
    },

    //得到当前时间相关的数据
    getCurrentDate() {
        let now = new Date();
        let year = now.getFullYear();
        // year = year >= 10 ? year : '0' + year;
        let month = now.getMonth() + 1;
        month = month >= 10 ? month : '0' + month;
        let date = now.getDate();
        date = date >= 10 ? date : '0' + date;
        //totalDay 表示该月有多少天
        let totalDay = new Date(year, month, 0).getDate();
        let today = year + '-' + month + '-' + date
        this.setData({
            today,
            year,
            month,
            totalDay,
        })
    },

    //新的记录产生时，需要刷新平均周期时间
    getPeriodCount() {
        this.getAvgPeriodTime();
        const dateList = wx.getStorageSync("dateList") || [];
        let avgPeriodTime = wx.getStorageSync("avgPeriodTime") || 29;
        let today = this.data.today;
        let nextPeriodCount, periodCount = 0;
        if (dateList.length === 0) {
            nextPeriodCount = avgPeriodTime;
        } else if (dateList.length % 2 === 0) {
            nextPeriodCount = avgPeriodTime - getDateDiff(dateList[1], today);
            this.setData({
                nextPeriodCount
            })
        } else if (dateList.length % 2 !== 0) {
            periodCount = getDateDiff(dateList[0], today) + 1;
            this.setData({
                periodCount
            })
        }

    },

    //新的记录产生时，需要刷新平均周期时间
    getAvgPeriodTime() {
        const list = wx.getStorageSync("dateList") || [];
        const length = list.length;

        if (length != 0 && length % 2 === 0) {
            for (var i = 0; i < length; i += 2) {
                let start = list[i + 1];
                // 如果没有前一个记录，则将preStart设置成和start一样，这样使得间隔时间为0，后面0将不显示
                let preStart = list[i + 3] || list[i + 1];
                let dateDiff2 = length >= 3 ? getDateDiff(preStart, start) : 0;
                let periodIntervalList = this.data.periodIntervalList;
                // 间隔期间太短或者太长都应该舍去，不属于正常范围的月经周期
                if (dateDiff2 >= 25 && dateDiff2 <= 40) {
                    periodIntervalList.push(dateDiff2)
                }
                this.setData({
                    periodIntervalList
                })
            }
            let avgPeriodTime = parseInt(average(this.data.periodIntervalList)) || 29;
            this.setData({
                avgPeriodTime
            })

            wx.setStorageSync("avgPeriodTime", avgPeriodTime)
        }
    },

})