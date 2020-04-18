"use strict";
class Person {
    constructor(name, age, club) {
        this.name = name;
        this.age = age;
        this.club = club;
    }
    static isAdult(age) {
        if (age > 17) {
            return true;
        }
        else {
            return false;
        }
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}`);
    }
    out() {
        console.log(`Age:${this.age}`);
    }
    explainJob() {
    }
}
Person.species = "Homo sapiens";
class Teacher extends Person {
    greeting() {
        console.log(`こんにちは私の名前は${this.name}です`);
    }
}
class Programer extends Person {
    // private static instance: ;
    // get subject() {
    //     if(!this._subject){
    //        throw new Error('There is know Subjects');
    //     }
    //     return this._subject;
    // }
    // set subject(value) {
    //     this._subject = "aaaaa";
    // }
    constructor(name, age, club, _subject) {
        super(name, age, club);
        this._subject = _subject;
    }
}
// const program = new Programer("shotaro",21,"Soccer","Math");
// console.log(program.subject);
// console.log(Person.isAdult);
