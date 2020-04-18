import { Agent } from "http";

let hasValue: boolean = true;
let hasNoValue: boolean = false;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.32;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

let hello;
hello = 'hello';
hello = true;

const person = {
    name: 'shot',
    age: 21,
    man: true
}

console.log(person.name);
console.log(person.age);

const fruits: string[] = ['Apple', 'Banana', 'Grape'];
const Any: any[] = ["aaa", 1, "0.01", 0.01];
const book: [string, number, boolean, any] = ["programing", 3740, false, 0.00001];
book.push(21);

console.log(book[2]);

enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI,
}

const coffee = {
    hot: true,
    size: CoffeeSize.VENTI
}
coffee.size = CoffeeSize.SHORT;

console.log(CoffeeSize.SHORT);

let anything: any = true;
anything = "hello";
anything = 0.000001;
anything = {};
anything.hfhhfhhf = "jshhhhdhs";
let banana = "banana";
banana = anything;

let unionType: number | string = 10;
unionType = "AAAAA";


let unionTypes: (number | string)[] = [21, 'shotaro'];
console.log(unionType[0]);

const apple: 'apple' = "apple";
const apples: true = true;

let clothSize : 'small' | "medium" | 'large' = "medium";

type clothSize = 'small' | "medium" | 'large'
type numbers = 1 | 2  | 3 | 4 | 5
const numbers = 4;

function add(num1,num2): number | string{
    return num1 + num2
}

function sayHello(): void {
    console.log('Hello');
}

console.log(sayHello());
// let tmp: undefined = null;
// let tmpNull: null = undefined;

const anotherAdd: (n1: number,n2: number) => number = function (num1: number, num2: number): number {
    return num1 + num2;
};

const doubleNumber = (number: number) => number = number * 2;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}

doubleAndHandle(3, doubleNumber => {
    return doubleNumber
});

// let getTriangle = function (base, height) {
//     return base * height / 2;
// };
// console.log('三角形の面積は' + getTriangle(10, 2));//三角形の面積は10

// let getTriangles = (base, height) => {
//     return base * height / 2;
// };
// console.log('三角形の面積は' + getTriangle(10, 2));//三角形の面積は10

let unknownInput: unknown;
let anyInput: any;
unknownInput = 'hello';
unknownInput = 1;
unknownInput = true;

anyInput = true
anyInput = 21;

if(typeof unknownInput === "string") {
    console.log(unknownInput);
}

function error(messages: number) {
    // throw new Error(messages);
    while(true) {
        if (messages % 3 === 0 ) {
            break;
        }
    }
}
console.log(error(404));


