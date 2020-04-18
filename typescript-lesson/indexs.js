"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hasValue = true;
let hasNoValue = false;
let count = 10;
let float = 3.14;
let negative = -0.32;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello;
hello = 'hello';
hello = true;
const person = {
    name: 'shot',
    age: 21,
    man: true
};
console.log(person.name);
console.log(person.age);
const fruits = ['Apple', 'Banana', 'Grape'];
const Any = ["aaa", 1, "0.01", 0.01];
const book = ["programing", 3740, false, 0.00001];
book.push(21);
console.log(book[2]);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.VENTI
};
coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);
let anything = true;
anything = "hello";
anything = 0.000001;
anything = {};
anything.hfhhfhhf = "jshhhhdhs";
let banana = "banana";
banana = anything;
let unionType = 10;
unionType = "AAAAA";
let unionTypes = [21, 'shotaro'];
console.log(unionType[0]);
const apple = "apple";
const apples = true;
let clothSize = "medium";
const numbers = 4;
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello');
}
console.log(sayHello());
// let tmp: undefined = null;
// let tmpNull: null = undefined;
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = (number) => number = number * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(3, doubleNumber => {
    return doubleNumber;
});
// let getTriangle = function (base, height) {
//     return base * height / 2;
// };
// console.log('三角形の面積は' + getTriangle(10, 2));//三角形の面積は10
// let getTriangles = (base, height) => {
//     return base * height / 2;
// };
// console.log('三角形の面積は' + getTriangle(10, 2));//三角形の面積は10
let unknownInput;
let anyInput;
unknownInput = 'hello';
unknownInput = 1;
unknownInput = true;
anyInput = true;
anyInput = 21;
if (typeof unknownInput === "string") {
    console.log(unknownInput);
}
function error(messages) {
    // throw new Error(messages);
    while (true) {
        if (messages % 3 === 0) {
            break;
        }
    }
}
console.log(error(404));
