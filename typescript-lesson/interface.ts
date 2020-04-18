interface Human  {
    name: string;
    age: number;
    greeting(message: string): void;
}

interface NameAble {
    name: string;
}

// type addFunc = (
//     num1: number,
//     num2: number
// ) => number;

interface addFunc {
    (num1: number, num2: number): number;
}

let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}


interface Spec {
    
}

interface NameAbles {
    name: string;
    nickName?: string;
}

const nameAble: NameAble = {
    name: "shot"
}

let NameAbl : NameAbles;

class Developer implements Human,NameAble {
    constructor(public name: string, public age: number){}
    greeting(message?: string){
        console.log('Hello');
    }
}

const human : Human = {
    name: "shotaro",
    age: 21,
    greeting(message: string)  {
        console.log(message);
    }
}

let developer: Human;
const user: Human = new Developer('aaa',38);

class AdvancedPerson {
    name: string = 'Peter'
    private age: number = 35;
}

class AdvancedCar {
    name: string = 'Prius'
    private age: number = 5;
}

let a = new AdvancedPerson();
let b = new AdvancedPerson();

interface TmpFunc {
    (x: string): number;
    (x: number): number;
}

const upperHello: TmpFunc = function(x: string | number) {return 0} ;

interface FuncA {
    (a: number): number;
}
interface FuncB {
    (a: string): string;
}
let intersectionFunc: FuncA & FuncB;
let unionFunc: FuncA | FuncB;
unionFunc = function(a: number) {return 810}

function advancedFn(...args: [number,string,boolean?]) {}
advancedFn(0,"hi")

function advancedFunck(...args: string[]){}
advancedFunck("1","2","3","4")

function fn(...args: readonly number[]){}
fn(0,0,0,0,0,0,0,0)

let milk = 'milk' as const;
let drink = milk;

const array = [10,20] as const;
const peter = {
    name: 'Peter',
    age: 38
} as const;

type Peter = typeof peter;


