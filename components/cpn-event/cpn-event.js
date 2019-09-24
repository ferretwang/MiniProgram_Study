// components/cpn-event/cpn-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cpn_btn_counter() {
      this.triggerEvent("cpn_btn_counter",{name:"wbw",age:"18"},{})
    }
  },
  
})
