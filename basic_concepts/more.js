"use strict";
function sum(x, y) {
    return x + y;
}
var sum2 = sum;
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
// type assertion 类型断言
function getLength(input) {
    // const str=input as String
    // if(str.length){
    //     return str.length
    // }else{
    //     const num=input as Number
    //     return num.toString().length
    // }
    if (input.length) {
        return input.length;
    }
    else {
        return input.toString().length;
    }
}
