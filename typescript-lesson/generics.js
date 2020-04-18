"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timers_1 = require("timers");
function copy(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: 'shot', age: 38 }, 'age'));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('AAAAAAA');
const TmpDatabase = {
    id: 1,
    data: [32]
};
const fetchData = new Promise(resolve => {
    timers_1.setTimeout(() => {
        resolve('hello');
    }, 3000);
});
fetchData.then(data => {
    data.toUpperCase();
});
const vegetables = ['Tomato', 'Broccoli', 'Asparagus'];
let tmp;
let tmp2;
let tmp3;
let tmp4;
