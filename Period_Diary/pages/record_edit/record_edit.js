// record_edit.js
import {
    $http
} from '../../request/index'

Page({
    data: {
        start: '',
        end: ''
    },

    onShow() {
        // 拿到上一页传递的index数据
        let pages = getCurrentPages();
        let currentPage = pages[pages.length - 1];
        let options = currentPage.options;
        const {
            start,
            end
        } = options;

        this.setData({
            start,
            end
        })
    },

    handleDelete() {
        let dateList = wx.getStorageSync("dateList")
        let {
            start,
            end
        } = this.data
        let startIndex = dateList.indexOf(start)
        let endIndex = dateList.indexOf(end)

        if (endIndex === -1) {
            dateList.splice(startIndex, 1)
        } else {
            dateList.splice(startIndex, 1)
            dateList.splice(endIndex, 1)
        }

        this.saveData(dateList)
        wx.setStorageSync('dateList', dateList)
        wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1500,
        });
        wx.navigateBack({
            delta: 1
        });
    },
    saveData(dateList) {
        const objectId = wx.getStorageSync("objectId")
        const params = {
            dateList
        }
        $http(`classes/xym/${objectId}`, 'PUT', params).then(res => {
            console.log(res, 'put res =========')
        })
    },
})