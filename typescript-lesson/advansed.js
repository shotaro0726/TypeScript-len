"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const quill = {
    name: "Quill",
    role: "front-end",
    follower: 1000
};
let tagets = function (a) {
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
}
const upperHello = toUpperCase('hello');
console.log(upperHello);
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    else if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
    else {
        return;
    }
}
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-bow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    if (pet instanceof Bird) {
        pet.fly();
    }
    // switch (pet.kind) {
    //     case 
    // }
}
class Person {
    speak() {
        console.log('こんにちは');
    }
    body() {
        console.log('体');
    }
}
class Shotaro {
    speak() {
        console.log('私の名前は翔太郎です');
    }
    skill() {
        console.log('私はプログラミングができます。');
    }
}
function humans(human) {
    if (human instanceof Shotaro) {
        human.skill();
    }
    else if ("speak" in Shotaro) {
        console.log(human.speak());
    }
}
havePet(new Bird());
const input = document.getElementById('input');
input.value = 'init';
const doo = document.getElementById('body');
const designer = {
    name: "shotaro",
    role: 'web'
};
console.log(designer.name);
const downloadData = {
    id: 1
};
console.log((_a = downloadData.user) === null || _a === void 0 ? void 0 : _a.name);
const userData = (_b = downloadData.user, (_b !== null && _b !== void 0 ? _b : 'no-user'));
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
let target = Color.RED;
let source = 100;
target = source;
