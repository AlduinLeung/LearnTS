let isDone:boolean=false;
let age:number=20;
let message:string=`sss`

//underfine和null
let u:undefined=undefined;
let v:null=null;

//any类型和联合类型，使用any后ide没有提示了

let notSure:any=4
notSure=`maybe it is a string`
notSure=true;

//unitypes
let numberOrString:number|string =1234;
numberOrString=`abc`;


//array和tuples
//array
let arrOfNumbers:number[]=[1,2,3,4]
arrOfNumbers.push(5);
//tuples:实际上就是限制了数据类型的数组
let user:[String,Number]=['ljl',20]
