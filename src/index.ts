let s: string = 'hello';
console.log(s);

//基本类型
let str = 'hello'; //ts会自动推导类型为string

let num: number = 123131;
let boo = true;
// boo =123;  cannot assign number to boolean
let n: null = null;
let un: undefined = undefined;

let test: any = 'asdadq'; //any类型
//数组
let arr: string[] = ['1', '2'];
let arr2: string[][] = [
  ['1', '2'],
  ['3', '4'],
];
//元组
let tuple: [number, string] = [1, '2'];
let tuple2: [string, string][] = [
  ['1', '2'],
  ['3', '4'],
];

// enum 枚举
// 开直播API - > 获取直播状态
enum LiveStatus {
  SUCCESS = 0,
  FAIL = -1,
  STREAMING = 1,
}
const LiveStatusCode = LiveStatus.SUCCESS;

// union 联合类型
let aaa: string | number = '123';
aaa = 123;
aaa = 'sdadasd';

// type 自定义类型
type A = number | string;

let a1: A = '123';

// interface 接口
interface User {
  name: string;
  age: number;
}

// ----- Object -----
type Card = {
  name: string;
  desc: string;
};

interface CardInterface {
  name: string;
  desc: string;
}
interface CardInterface {
  age: number;
}

// missing some params
// const obj: Card = {
//   name: '123',
// };

// function 函数
function hello(a: string, b: string): string {
  return a + b;
}

// undefined 这种参数必须放到最后一个
function hello2(name: string, age?: number) {
  let a: string;
  // a = age;
}
//再看一个例子,这里因为testfunc的参数只能是string然后如果你传入的是age的话会是undefined
// Argument of type 'number | undefined' is not assignable to parameter of type 'number'.
function testfunc(a: number) {
  console.log(a);
}
function hello4(name: string, age?: number) {
  if (age === undefined) {
    return -1;
  }
  testfunc(age);
}
const func = () => {};

const func1 = (a: string, b: string) => {};

// ------------------- 断言 unknown ------------------------
type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
// 从后端来的数据 ts没有办法确定这个数据类型，这里我们用ts来先确定一下assertion.
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = (await res.json()) as Data;
}

const data1: Data = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};

type Beta = {
  name: string;
};

// unknown 就是用在这里。。
const beta = data1 as unknown as Beta;
// -------------------- class ------------------------

class Live {
  roomName: string;
  private id: string;
  protected name: string;
  constructor(roomName: string, id: string, name: string) {
    this.roomName = roomName;
    this.id = id;
    this.name = name;
  }
  start() {}
}
class Live2 extends Live {
  constructor(roomName: string, id: string, name: string) {
    super(roomName, id, name);
  }
  start() {
    // super.name
    // Only public and protected methods of the base class are accessible via the 'super' keyword.ts(2340)
  }
}
const live = new Live('1号', '123', 'Leung');
console.log(live);

// // ref
// 关于js原生中私有变量的写法https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_class_fields

// 另外还有一点，用interface来作为class的blueprint的时候，不可以使用private等来修饰

// Class 'Car' incorrectly implements interface 'Carprops'.
//   Property 'name' is private in type 'Car' but not in type 'Carprops'.ts(2420)
interface Carprops {
  name: string;
  age: number;
  start: () => void;
}
class Car implements Carprops {
  // private name: string;
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  start() {}
}

// -------------------- 泛型 ------------------------

function print<T>(data: T) {
  console.log(data);
}
print<number>(123);

class Print<T> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
}

// -------------------- TS utitly  ------------------------

// Record<Keys, Type>
// Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';
//Record 实际上使用key
//Value 的方式
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

// Pick<Type, Keys>

// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

todo;
// Omit 取消某些属性
// 和Pick相反，Omit取消某些属性，而Pick只取某些属性
