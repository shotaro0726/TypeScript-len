"use strict";
console.log("compiler");
let hello = "hello";
console.log(hello.toUpperCase());
function echo(message) {
    return message;
}
let implicitAny;
implicitAny = 'implicitAny';
implicitAny.toUpperCase();
let nullableMessage = echo('hi');
let onlyNull = null;
let onlyUndefined = undefined;
if (onlyUndefined) {
    onlyUndefined;
}
let nums = 200;
function echoo(num) {
    num = 123;
    if (num === 200) {
        console.log("Success");
    }
    else {
        console.log("Error");
    }
}
