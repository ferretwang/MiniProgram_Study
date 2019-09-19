// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath : "",
    load_counter : 0
  },
  xiangce_pick: function() {
    wx: wx.chooseImage({
      count: 0,
      sizeType: [],
      sourceType: [],
      success: (res) => {
        // 1.取到路径
        console.log(res);
        const path = res.tempFilePaths[0];
        // 2.设置imagePath,绑定到image的scr路径中去
        this.setData({
          imagePath: path
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  bindLoad_image:()=>{
    
    console.log("图片加载完成")
  }

})