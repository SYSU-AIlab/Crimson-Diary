import regeneratorRuntime from '../../lib/runtime/runtime';
import {
    getDateDiff,
    average
} from "../../utils/dateFunc.js";


Page({

    data: {
        userinfo: {},
        recordDict: [],
        recordDictForYear: [],
        avgPeriodTime: 29,
        startM: 0,
        startD: 0,
        endY: 0,
        endM: 0,
        endD: 0,
        periodIntervalList: [],
    },

    onShow() {
        const userinfo = wx.getStorageSync("userinfo");
        this.setData({
            userinfo
        });

        this.getRecord();
        const recordDict = wx.getStorageSync("recordDict");
        let avgPeriodTime = wx.getStorageSync("avgPeriodTime") || 29
        this.setData({
            avgPeriodTime,
            recordDict
        })
    },

    getRecord() {
        let recordDict = [];
        let recordDictForYear = [];
        let list = wx.getStorageSync("dateList") || [];
        let length = list.length;

        if (length === 0) {
            recordDict = []
            wx.setStorageSync("recordDict", recordDict)
        }

        if (length != 0 && length % 2 != 0) {
            list.splice(0, 0, '0000-00-00')
        }
        length = list.length;
        if (length != 0) {
            let periodIntervalList = [];
            for (var i = 0; i < length; i += 2) {
                let end = list[i];
                let endY = end.slice(0, 4);
                let endM = end.slice(5, 7);
                let endD = end.slice(8, 10);

                let start = list[i + 1];
                let startM = start.slice(5, 7);
                let startD = start.slice(8, 10);

                let year = start.slice(0, 4);
                let dateDiff = getDateDiff(start, end) + 1;

                // 如果没有前一个记录，则将preStart设置成和start一样，这样使得间隔时间为0，后面0将不显示
                let preStart = list[i + 3] || list[i + 1];
                let dateDiff2 = length >= 3 ? getDateDiff(preStart, start) : 0;

                // 间隔期间太短或者太长都应该舍去，不属于正常范围的月经周期
                if (dateDiff2 >= 25 && dateDiff2 <= 40) {
                    periodIntervalList.push(dateDiff2)
                    this.setData({
                        periodIntervalList
                    })
                }



                let findYearIndex = recordDictForYear.indexOf(year);

                if (findYearIndex === -1) {
                    recordDictForYear.push(year)
                    recordDictForYear.sort().reverse();
                    recordDict.push({
                        year: year,
                        record: [{
                            start,
                            startM,
                            startD,
                            end,
                            endY,
                            endM,
                            endD,
                            dateDiff,
                            dateDiff2
                        }]
                    })
                } else {
                    recordDict[findYearIndex].record.push({
                        start,
                        startM,
                        startD,
                        end,
                        endY,
                        endM,
                        endD,
                        dateDiff,
                        dateDiff2
                    })
                }
            }
            let avgPeriodTime = parseInt(average(this.data.periodIntervalList)) || 29;
            this.setData({
                avgPeriodTime
            })
            wx.setStorageSync("avgPeriodTime", avgPeriodTime)
            wx.setStorageSync("recordDict", recordDict)
        }

    },

    hanldeItemTap(e) {
        const record = e.currentTarget.dataset["record"];
        const end = record['end']
        const start = record['start']
        wx.navigateTo({
            url: "../record_edit/record_edit?start=" + start + '&end=' + end,
        })
    }
})