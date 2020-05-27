```
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
<!-- 
    自定义v-model的实现，model对应的prop不应该被改变（例如使用v-model="prop"），props的检验只能检验基础数据类型，如果是引用类型，其属性也不能被改变，可以采用:value结合change事件的方式来实现v-model;结合以上实例理解；
    
 -->
```
参考--[官方链接](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)