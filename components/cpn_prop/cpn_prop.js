// components/cpn_prop/cpn_prop.js
Component({
  properties: {
    title: {
      type : String,
      value : "我是默认标题",
      observer:function(newVal,oldVal){
        console.log(newVal, oldVal)
      }
    }
  },
  externalClasses:["titleClass"]
  
})