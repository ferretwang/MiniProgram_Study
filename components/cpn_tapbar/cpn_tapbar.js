// components/cpn_tapbar/cpn_tapbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type : Array,
      value : []
    }
  },

  data: {
    currentIndex : 0
  },

  methods: {
    innerTap(event){
      // 1.取出index
      const index = event.currentTarget.dataset.index;
      // console.log(index);
      // console.log(event);
      // 2.修改currentIndex
      this.setData({
        currentIndex : index
      })
      // 3.通知外部页面内部的点击事件
      this.triggerEvent("cpn_innerClick",{index:index,title:this.properties.titles[index]},{})
    }
  }
})
