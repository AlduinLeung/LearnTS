//interface接口，定义了对象的类型
//对对象的形状(shape)进行描述
//对class进行抽象
//Duck Typing(鸭子类型)，关心对象将如何被使用，而不是对象的本身
//
//

//
interface IPerson{
    readonly id:Number; //定义readonly为只读属性，这里看起来readonly和const类似，但是readonly是用在属性上的，const是用在变量上的
    name:String;
    age:Number;
    gender?:String;   //加了？是可选属性
}
//这里约束了变量必须是和IPerson中限制保持一致的
let ljl:IPerson={
    id:1234,
    name:`ljl`,
    age:20
}
// ljl.id=1111;   //这里报错了


