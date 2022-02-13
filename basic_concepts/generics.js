"use strict";
// function echo(arg:number):number{
//     return arg
// }
// const result=echo(123);
function echo(args) {
    return;
}
var str = "str";
var result = echo(str);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var res = swap(['string', 123]);
res[0]; //此时调用res[0]出现了number的方法
res[1]; //res[1]出现的是string的方法
//约束泛型
function echoWithArr(arg) {
    console.log(arg.length);
    return arg;
}
var arr = echoWithArr([1, 3, 4, 5]);
function echoWithLength(arg) {
    console.log(arg.length);
    return arg;
}
var str2 = echoWithLength('string');
var obj = echoWithLength({ length: 22 });
var arr2 = echoWithLength([1, 2, 3, 5, 6]);
// class Queue{
//     private data=[];
//     push(item){
//         return this.data.push(item);
//     }
//     pop() {
//         return this.data.shift()
//     }
// }
// const  queue= new Queue();
// queue.push(1);
// queue.push('str');
// console.log(queue.pop().toFixed())  
// console.log(queue.pop().toFixed()) 
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());
var kp1 = { key: 1, value: 'str' };
var kp2 = { key: 'id', value: 1234 };
var arr4 = [1234, 1234];
var arr5 = [1, 2, 4, 5, 6];
function plus(a, b) {
    return a + b;
}
var a = plus;
function connect(a, b) {
    return a + b;
}
var b = connect;
