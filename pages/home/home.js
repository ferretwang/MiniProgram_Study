// pages/home/home.js
import request from "../..//service/network.js"

Page({

  data: {

  },

  onLoad: function (options) {
    // 1.原生网络请求方法:
    // this.request_origin();

    // 2.使用封装的request发送网络请求
    // promise最大的好处就是防止回调地狱
    request({
      url:"http://httpbin.org",

    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })


   
  },
  request_origin(){
 
 // 1.get请求带参数
    wx.request({
      url: 'http://www.125084.com/page362115/2.html',
      data: {
        s: "8",
        d: "0"
      },
      success(res) {
        console.log(res)
      }
    }),
    // 2.get请求不带参数
    wx.request({
      url: 'http://www.125084.com/manhua31495.html',
      success(res) {
        console.log(res)
      }
    }),
    // 3.post请求,带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method:"post",
      data: {
        name:"why",
        age:"18"
      },
      success(res) {
        console.log(res)
      }
    })
  }
})