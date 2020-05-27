### 一个webpack的api,通过执行require.context函数获取一个特定的上下文,主要用来实现自动化导入模块,在前端工程中,如果遇到从一个文件夹引入很多模块的情况,可以使用这个api,它会遍历文件夹中的指定文件,然后自动导入,使得不需要每次显式的调用import导入模块

#### 应用实例
```
<!-- 实现一个自动注册指定目录下所有.vue结尾的文件 -->
export default registerConponents(vue){
    /**
    *参数按顺序，分别是：文件路径，是否遍历子目录，文件匹配正则
    */
    let contexts = require.context('.',false,/\.vue$/);
    <!-- 
    solve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径 
    keys {Function} -返回匹配成功模块的名字组成的数组
    id {String} -执行环境的id,返回的是一个字符串,主要用在module.hot.accept,应该是热加载
    -->

    contexts.keys().forEach(item=>{
        let component = contexts(keys).default;
        vue.component(component.name,component);
    })
}
```
以上部分内容引用自--[使用require.context实现前端工程自动化](https://www.jianshu.com/p/c894ea00dfec)，
可以参考此文
