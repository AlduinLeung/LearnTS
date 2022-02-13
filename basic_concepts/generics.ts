// function echo(arg:number):number{
//     return arg
// }
// const result=echo(123);

function echo<T>(args:T):T{
    return 
}
const str:string=`str`
const result=echo(str)

function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]];
}
const res=swap(['string',123])
res[0] //此时调用res[0]出现了number的方法
res[1] //res[1]出现的是string的方法

//约束泛型
function echoWithArr<T>(arg:T[]):T[]{
    console.log(arg.length);
    return arg
}
const arr=echoWithArr([1,3,4,5])

interface IWithLength {
    length:number,
}
function echoWithLength<T extends IWithLength>(arg:T){
    console.log(arg.length)
    return arg
}

const str2=echoWithLength('string');
const obj=echoWithLength({length:22});
const arr2=echoWithLength([1,2,3,5,6])


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

class Queue<T>{
    private data=[];
    push(item:T){
        return this.data.push(item);
    }
    pop():T {
        return this.data.shift()
    }
}
const  queue= new Queue<number>();
queue.push(1);
console.log(queue.pop().toFixed())  
console.log(queue.pop().toFixed()) 

interface KeyPair<T,U>{
    key: T;
    value: U;
}
let kp1:KeyPair<number,string>={key:1,value:'str'};
let kp2:KeyPair<string,number>={key:'id',value:1234};

let arr4:number[]=[1234,1234]
let arr5:Array<number>=[1,2,4,5,6]
// interface IPlus{
//     (a:number,b:number):number
// }   
interface IPlus<T>{
    (a:T,b:T):T
}   
function plus(a:number, b:number):number{
    return a +b
}
const a:IPlus<number>=plus 

function connect(a:string,b:string):string{
    return a+b
}
const b:IPlus<string>=connect