// pages/wxml/wxml.js
Page({
  data: {
    message: "哈哈哈",
    name: "呵呵",
    age: 10,
    now_time: new Date().toLocaleString(),
    isActive: false,
    isShow: false,
    score: 40,
    movies: ["盗梦空间", "数码宝贝", "黑客帝国"],
    nums:[
      [12,123],
      [21,323],
      [45,987]
    ]
  },
  onLoad: function() {
    setInterval(() => {
      this.setData({
        now_time: new Date().toLocaleString()
      })
    }, 1000)
  },
  change_color() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  showOrNot() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  scoreIncrease() {
    this.setData({
      score: this.data.score += 6
    })
  }
})