"use strict";
//interface接口，定义了对象的类型
//对对象的形状(shape)进行描述
//对class进行抽象
//Duck Typing(鸭子类型)，关心对象将如何被使用，而不是对象的本身
//
//
//这里约束了变量必须是和IPerson中限制保持一致的
var ljl = {
    id: 1234,
    name: "ljl",
    age: 20
};
// ljl.id=1111;   //这里报错了
