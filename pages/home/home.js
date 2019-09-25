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
  },
  data_rewrite(){
    //拿到组件对象,调用 组件.setData({})方法,修改counter.
    // 1.获取组件对象
    const cpn_select = this.selectComponent("#cpn_select")
    
    // 2.通过setData()修改组件中的数组(这种方法不推荐使用,不合理)
    // cpn_select.setData({
    //   counter: cpn_select.data.counter +1
    // })

    // 3.通过组件内methods()提供方法接口统一修改
    cpn_select.cpn_select_counter(10)
  }



})