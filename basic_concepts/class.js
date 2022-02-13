"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.isAnimal = function (a) {
        return a instanceof Animal;
    };
    Animal.prototype.run = function () {
        return this.name + " is running"; //类
    };
    Animal.cata = ['mamal', 'bird']; //静态属性
    return Animal;
}());
var snake = new Animal('lilly');
//console.log(snake.name)
// snake.name=`sss`  //无法访问到
// console.log(snake.run())
console.log(Animal.cata);
console.log(Animal.isAnimal(snake));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        return this.name + " is barking "; //继承
    };
    return Dog;
}(Animal));
var xiaobao = new Dog('xiaobao');
// console.log(xiaobao.run())
// console.log(xiaobao.bark())
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.run = function () {
        return 'meow' + _super.prototype.run.call(this); //多态-->重写
    };
    return Cat;
}(Animal));
var maomao = new Cat('maomao');
console.log(maomao.run());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.switchRadio = function () {
    };
    return Car;
}());
var Cellphone = /** @class */ (function () {
    function Cellphone() {
    }
    Cellphone.prototype.switchRadio = function () {
    };
    Cellphone.prototype.checkBattrtyStatus = function () {
    };
    return Cellphone;
}());
