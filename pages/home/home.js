// pages/home/home.js
Page({
  data: {
    title: ["衣服", "帽子", "鞋子"]
  },
  btn1() {
    console.log("点击按钮1");
  },
  bind_touch_start() {
    console.log("bind_touch_start");
  },
  bind_touch_move() {
    console.log("bind_touch_move");
  },
  bind_touch_end() {
    console.log("bind_touch_end");
  },
  bind_tap() {
    console.log("bind_tap");
  },
  bind_long_press() {
    console.log("bind_long_press");
  },
  btn2(event) {
    console.log("事件对象", event);
  },
  inner(event) {
    console.log("inner发生点击", event);
  },
  outer(event) {
    console.log("outer发生点击", event);
  },
  item_tap(event) {
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;

    console.log(title, index);
  },
  //-----事件冒泡和事件捕获---------
  bindtap_c1(event) {
    console.log("c1");
  },
  bindtap_v1(event) {
    console.log("b1");
  },
  bindtap_c2(event) {
    console.log("c2");
  },
  bindtap_v2(event) {
    console.log("b2");
  },
  bindtap_c3(event) {
    console.log("c3");
  },
  bindtap_v3(event) {
    console.log("b3");
  }
})