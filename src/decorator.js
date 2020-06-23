// 装饰者模式
Function.prototype.before = function(beforeFn){
    // 原函数的引用
    var that = this;
    return function (){
        // 改变this的引用
        beforeFn.apply(this,arguments);
        return that.apply(this,arguments)
    }
}

Function.prototype.after = function(afterFn){
    // 原函数的引用
    var that = this;
    return function (){
        // 改变this的引用
        var ref = that.apply(this,arguments)
        afterFn.apply(this,arguments);
        return ref;
    }
}
function fun(){
    var a = 'test fun';
    console.log('test');
}
function beforeFn(){
    console.log('before');
}
function afterFn(){
    console.log('after');
}
fun = fun.before(beforeFn).after(afterFn);
fun();