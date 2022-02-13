"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var s = 'hello';
console.log(s);
//基本类型
var str = 'hello'; //ts会自动推导类型为string
var num = 123131;
var boo = true;
// boo =123;  cannot assign number to boolean
var n = null;
var un = undefined;
var test = 'asdadq'; //any类型
//数组
var arr = ['1', '2'];
var arr2 = [
    ['1', '2'],
    ['3', '4'],
];
//元组
var tuple = [1, '2'];
var tuple2 = [
    ['1', '2'],
    ['3', '4'],
];
// enum 枚举
// 开直播API - > 获取直播状态
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["STREAMING"] = 1] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
var LiveStatusCode = LiveStatus.SUCCESS;
// union 联合类型
var aaa = '123';
aaa = 123;
aaa = 'sdadasd';
var a1 = '123';
// missing some params
// const obj: Card = {
//   name: '123',
// };
// function 函数
function hello(a, b) {
    return a + b;
}
// undefined 这种参数必须放到最后一个
function hello2(name, age) {
    var a;
    // a = age;
}
//再看一个例子,这里因为testfunc的参数只能是string然后如果你传入的是age的话会是undefined
// Argument of type 'number | undefined' is not assignable to parameter of type 'number'.
function testfunc(a) {
    console.log(a);
}
function hello4(name, age) {
    if (age === undefined) {
        return -1;
    }
    testfunc(age);
}
var func = function () { };
var func1 = function (a, b) { };
// 从后端来的数据 ts没有办法确定这个数据类型，这里我们用ts来先确定一下assertion.
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/todos/1')];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = (_a.sent());
                    return [2 /*return*/];
            }
        });
    });
}
var data1 = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
};
// unknown 就是用在这里。。
var beta = data1;
// -------------------- class ------------------------
var Live = /** @class */ (function () {
    function Live(roomName, id, name) {
        this.roomName = roomName;
        this.id = id;
        this.name = name;
    }
    return Live;
}());
var live = new Live('1号', '123', 'Leung');
console.log(live);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksQ0FBQyxHQUFXLE9BQU8sQ0FBQztBQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWYsTUFBTTtBQUNOLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLGtCQUFrQjtBQUVyQyxJQUFJLEdBQUcsR0FBVyxNQUFNLENBQUM7QUFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2YsNkNBQTZDO0FBQzdDLElBQUksQ0FBQyxHQUFTLElBQUksQ0FBQztBQUNuQixJQUFJLEVBQUUsR0FBYyxTQUFTLENBQUM7QUFFOUIsSUFBSSxJQUFJLEdBQVEsUUFBUSxDQUFDLENBQUMsT0FBTztBQUNqQyxJQUFJO0FBQ0osSUFBSSxHQUFHLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0IsSUFBSSxJQUFJLEdBQWU7SUFDckIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ1gsQ0FBQztBQUNGLElBQUk7QUFDSixJQUFJLEtBQUssR0FBcUIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkMsSUFBSSxNQUFNLEdBQXVCO0lBQy9CLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUNYLENBQUM7QUFFRixVQUFVO0FBQ1Ysb0JBQW9CO0FBQ3BCLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNiLGlEQUFXLENBQUE7SUFDWCw0Q0FBUyxDQUFBO0lBQ1QscURBQWEsQ0FBQTtBQUNmLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBQ0QsSUFBTSxjQUFjLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztBQUUxQyxhQUFhO0FBQ2IsSUFBSSxHQUFHLEdBQW9CLEtBQUssQ0FBQztBQUNqQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ1YsR0FBRyxHQUFHLFNBQVMsQ0FBQztBQUtoQixJQUFJLEVBQUUsR0FBTSxLQUFLLENBQUM7QUFzQmxCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsaUJBQWlCO0FBQ2pCLEtBQUs7QUFFTCxjQUFjO0FBQ2QsU0FBUyxLQUFLLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsQ0FBQztBQUVELHlCQUF5QjtBQUN6QixTQUFTLE1BQU0sQ0FBQyxJQUFZLEVBQUUsR0FBWTtJQUN4QyxJQUFJLENBQVMsQ0FBQztJQUNkLFdBQVc7QUFDYixDQUFDO0FBQ0QsMERBQTBEO0FBQzFELHlGQUF5RjtBQUN6RixTQUFTLFFBQVEsQ0FBQyxDQUFTO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakIsQ0FBQztBQUNELFNBQVMsTUFBTSxDQUFDLElBQVksRUFBRSxHQUFZO0lBQ3hDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtRQUNyQixPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ1g7SUFDRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEIsQ0FBQztBQUNELElBQU0sSUFBSSxHQUFHLGNBQU8sQ0FBQyxDQUFDO0FBRXRCLElBQU0sS0FBSyxHQUFHLFVBQUMsQ0FBUyxFQUFFLENBQVMsSUFBTSxDQUFDLENBQUM7QUFTM0MsaURBQWlEO0FBQ2pELFNBQWUsT0FBTzs7Ozs7d0JBQ1IscUJBQU0sS0FBSyxDQUFDLDhDQUE4QyxDQUFDLEVBQUE7O29CQUFqRSxHQUFHLEdBQUcsU0FBMkQ7b0JBQ3pELHFCQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7b0JBQXhCLElBQUksR0FBRyxDQUFDLFNBQWdCLENBQVM7Ozs7O0NBQ3hDO0FBRUQsSUFBTSxLQUFLLEdBQVM7SUFDbEIsTUFBTSxFQUFFLENBQUM7SUFDVCxFQUFFLEVBQUUsQ0FBQztJQUNMLEtBQUssRUFBRSxvQkFBb0I7SUFDM0IsU0FBUyxFQUFFLEtBQUs7Q0FDakIsQ0FBQztBQU1GLG1CQUFtQjtBQUNuQixJQUFNLElBQUksR0FBRyxLQUF3QixDQUFDO0FBQ3RDLHNEQUFzRDtBQUV0RDtJQUlFLGNBQVksUUFBZ0IsRUFBRSxFQUFVLEVBQUUsSUFBWTtRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFFRCxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMifQ==