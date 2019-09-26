// pages/home/home.js
Page({
//弹窗---------
  show_toast(){
    wx.showToast({
      title: '你好啊'
    })
  },
  show_modal(){
    wx.showModal({
      title: '标题',
      content: '内容',
      success(res){
        console.log(res)
      }
    })
  },
//分享-------------
  onShareAppMessage(options){
    return {
      title :"标题",
      path:"/pages/about/about",
      imageUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569477069534&di=ce2d4442b17a034a60638b72c3a632e8&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110719%2F7724996_120600793000_2.jpg"
    }
  }
})