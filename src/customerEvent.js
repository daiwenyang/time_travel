//1、 先创建事件，用于后面派发；
let ce = new CustomEvent("test", {
    detail: { name: "this is test" }
  });
  
  // 2、添加对应事件的监听器；
  window.addEventListener("test", e => {
    alert(`触发test事件，${e.detail.name} `);
  });
//   点击某个元素后就派发事件；
  document.getElementById("test").addEventListener(
    "click", function () {
      // 3、派发事件
      window.dispatchEvent(ce);
    }
  )
//   Event 与 CustomEvent 的主要区别在于CustomEvent可以传递自定义参数，而event只能传递触发事件的对象信息，
// 举例：vue的v-model，如果手动改变input的value值，不会触发input事件，导致双向绑定失败，
// 但是可以用dispatchEvent方式触发input事件，实现绑定值得更改；

// 参考链接 ：掘金关于自定义事件的介绍 https://juejin.im/post/6844904069820055560 

// 事件总线的实现模块events: https://github.com/Gozala/events
