class Animal{
   // protected name:string;
   readonly name:string;
   static cata:string[]=['mamal','bird'];   //静态属性
   static isAnimal(a){
        return  a instanceof Animal
   }
    constructor(name:string){
        this.name=name;
    }
    run(){
        return `${this.name} is running` //类
    }
}
const snake=new Animal('lilly');
//console.log(snake.name)
// snake.name=`sss`  //无法访问到
// console.log(snake.run())
console.log(Animal.cata)
console.log(Animal.isAnimal(snake))
class Dog extends Animal{
    bark(){
        return `${this.name} is barking ` //继承
    }
}
const xiaobao=new Dog('xiaobao');
// console.log(xiaobao.run())
// console.log(xiaobao.bark())


class Cat extends Animal{
    constructor(name){
        super(name)
        console.log(this.name)
    }
    run(){
        return 'meow' +super.run();   //多态-->重写
    }
}
const maomao=new Cat('maomao');
console.log(maomao.run())

//Public： 默认的属性和方法都是public的，加上public或者不加都可以

//Private：只能在类中进行访问，子类也无法访问。

//Protected ： 子类可以访问属性

//Readonly : 可以读

//static : 静态属性或者是静态方法。
//类的第二个用途，对类的行为进行抽象
//不同类可以有一些共有的特性， 仅仅用父类继承子类的方法来没有办法完成。
//Implements 关键字

interface Radio{
    switchRadio():void;
}
interface Battery{
    checkBattrtyStatus();
}
interface RadioWithBattery extends Radio{
    checkBattrtyStatus();
}
class Car implements Radio {
    switchRadio(){

    }
}
class Cellphone implements RadioWithBattery{
    switchRadio(){

    }
    checkBattrtyStatus(){

    }
}