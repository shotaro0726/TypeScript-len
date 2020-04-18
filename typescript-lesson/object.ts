class Person {
    static species = "Homo sapiens";
    static isAdult(age: number) {
        if(age > 17){
            return true;
        }else{
            return false;
        }
    }
    constructor(public readonly name: string, private age: number, public club: string) {
    }
    incrementAge() {
        this.age += 1;
    }
    greeting(this: { name: string, age: number }) {
        console.log(`Hello! My name is ${this.name}`);
    }
    out(this:Person) {
        console.log(`Age:${this.age}`);
    }
    explainJob() {

    }
}

abstract class Teacher extends Person {
    greeting(this: {name:string}) {
        console.log(`こんにちは私の名前は${this.name}です`);
    }

    abstract explainJob(): void; 
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
    
    private constructor(name: string,age: number, club: string,private _subject: string) {
        super(name,age,club);
    }
}

// const program = new Programer("shotaro",21,"Soccer","Math");
// console.log(program.subject);
// console.log(Person.isAdult);

