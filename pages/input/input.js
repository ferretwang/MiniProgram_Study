// pages/input/input.js
Page({

 
  data: {

  },
  bind_input(event){
    console.log("获取输入内容:" + event.detail.value)
  },
  bind_focus() {
    console.log("获取焦点")
  },
  bind_blur() {
    console.log("失去焦点")
  }
})