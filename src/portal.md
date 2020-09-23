
### 说明：
    当我们构建一个组件的时候，render函数返回的对象默认是渲染在最近的父节点，但是有的时候，我们需要将组件渲染到父组件之外的dom下，例如dialog、悬浮框、提示框等，
    这种情况下我们需要关注键盘焦以及无障碍属性等；
**虽然portal可以渲染到其他dom节点，但是行为仍然和普通的react节点一致，例如时事件冒泡、context等特性，也就是实际的dom节点可以捕获兄弟节点的事件冒泡等。**
相关示例说明 [potals](https://react.docschina.org/docs/portals.html)

 