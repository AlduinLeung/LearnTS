"use strict";
var isDone = false;
var age = 20;
var message = "sss";
//underfine和null
var u = undefined;
var v = null;
//any类型和联合类型，使用any后ide没有提示了
var notSure = 4;
notSure = "maybe it is a string";
notSure = true;
//unitypes
var numberOrString = 1234;
numberOrString = "abc";
//array和tuples
//array
var arrOfNumbers = [1, 2, 3, 4];
arrOfNumbers.push(5);
//tuples:实际上就是限制了数据类型的数组
var user = ['ljl', 20];
