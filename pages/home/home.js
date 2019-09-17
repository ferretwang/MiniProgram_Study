// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "wbw",
    age: 18,
    students: [{
        id: "001",
        name: "小明",
        age: 12
      },
      {
        id: "002",
        name: "张三",
        age: 15
      },
      {
        id: "003",
        name: "李四",
        age: 18
      }
    ],
    counter: 0
  },

  handleBtnClick() {
    // 1.这是错误的做法,界面是不会刷新的
    // this.data.counter += 1;
    // console.log(this.data.counter);

    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },

  handleSubtraction(){
    this.setData({
      counter:this.data.counter -1
    })
  }



})