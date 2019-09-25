// components/cpn_m_slot/cpn_m_slot.js
Component({
  /**
   * 组件的属性列表
   * ----让使用者可以给组件传入数据
   */
  properties: {
    
  },
// --------------------------------
  /**
   * 组件的初始数据
   *----定义组件内部的初始化数组
   */
  data: {
    counter:0
  },
// ----------------------------------
  /**
   * 组件的方法列表
   * ----用于定义组件内部的函数
   */
  methods: {

  },
//  -----------------------------
  /**
   * 1.定义组件的[配置选项]
   * multipleSlots: true
   * 2.样式的隔离方式
   * styleIsolation:apply-shared/shared
   * 
   */
  options: {
    multipleSlots: true
  },
// -------------------------------
  // 外界给组件传入额外的形式
  // externalClasses[]
  
// -----------------------------------
  // 监听properties/data中的数据的改变
    observers:{
      counter:function(newVal){
        console.log(newVal)
      }
    },
// ------------------------------------    
  // 1.组件中监听页面生命周期函数
    pageLifetimes:{
      show(){
        console.log("监听组件所在页面显示时")
      },
      hide(){
        console.log("监听组件所在页面隐藏时")
      },
      resize(){
        console.log("监听组件所在页面尺寸改变时")
      }
    },
  // 2.监听组件自己生命周期
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    created() { 
      console.log("监听组件生成时")
    },
    ready(){
      console.log("监听组件被渲染时")
    },
    attached: function () { 
      console.log("监听组件被添加到页面时") 
    },
    moved: function () { 
      console.log("监听组件移动时")
    },
    detached: function () {
      console.log("监听组件被移除时")
    },
  },
  
})
