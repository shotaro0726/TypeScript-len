import { type } from "os";
import { AssertionError } from "assert";

type Engineer = {
    name: string;
    role: string;
}

type Blogger = {
    name: string;
    follower: number;
}

type EngineerBlogger = Engineer & Blogger;
const quill: EngineerBlogger = {
    name: "Quill",
    role: "front-end",
    follower: 1000
}
let tagets = function (a: string) {

} 

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string): string; 
function toUpperCase(x: string): number;
function toUpperCase(x: string | number) : string | number{
    if(typeof x === 'string') {
       return x.toUpperCase();
    }
    return '';
}

const upperHello = toUpperCase('hello');
console.log(upperHello);


type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name);
    if('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }else if('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }else{
        return;
    }
}
class Dog {
    kind: 'dog' = 'dog';
    speak() {
        console.log('bow-bow');
    }
}

class Bird {
    kind: 'bird' = 'bird';
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
    if(pet instanceof Bird) {
        pet.fly();
    }
    // switch (pet.kind) {
    //     case 
    // }
}

class Person {
    speak() {
        console.log('こんにちは')
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
        console.log('私はプログラミングができます。')
    }
}


type Human = Person | Shotaro
function humans(human: Human){
    if(human instanceof Shotaro) {
        human.skill();
    }else if("speak" in Shotaro) {
        console.log(human.speak());
    }
}
havePet(new Bird());

const input = <HTMLInputElement> document.getElementById('input');
input.value = 'init';

const doo = document.getElementById('body');

interface Designer {
    name: string;
    [index: string]:string;
}
const designer: Designer = {
    name: "shotaro",
    role:'web'
}

console.log(designer.name);

interface DownloadData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    }
}

const downloadData: DownloadData = {
    id: 1
}
console.log(downloadData.user?.name);
const userData = downloadData.user ?? 'no-user';
type id = DownloadData["id"]
enum Color {
    RED,
    BLUE
}
let target = Color.RED;
let source = 100;
target = source;