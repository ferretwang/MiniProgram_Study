// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter : 0
  },
  cpn_btn_counter(event){
    console.log(event.detail)
    this.setData({
      counter : this.data.counter + 1
    })
  },
  cpn_innerClick(event){
    console.log(event.detail.index, event.detail.title)
  }
})