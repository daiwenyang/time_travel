// 简单版观察者模式；
class Subject{
    queue=[];
    subscribe(...fun){
        // 实际应用中需要添加防止重复订阅；
        this.queue.push(...fun);
    };
    unsubscribe(fun){
        this.queue = this.queue.filter(item=> item !== fun);
    };
    pulish(args){
        this.queue.forEach(fun=>{
            fun(args);
        })
    }
}

class Observer{
    constructor(name){
        this.name = name;
    }
    // 采用箭头函数，绑定作用域
    read=(text)=>{
        console.log(this.name + '收到：' + text);
    }
}
let Tom  = new Subject();
let jerry1 = new Observer('jerry1');
let jerry2 = new Observer('jerry2');
let jerry3 = new Observer('jerry3');
let jerry4 = new Observer('jerry4');
Tom.subscribe(jerry1.read,jerry2.read,jerry3.read,jerry4.read);
Tom.pulish('这是第一次通知');
console.log('去掉jerry1的订阅');
Tom.unsubscribe(jerry1.read);
Tom.pulish('这是第二次通知');

