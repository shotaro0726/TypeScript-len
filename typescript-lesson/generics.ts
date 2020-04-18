import { type } from "os";
import { setTimeout } from "timers";

function copy<T extends {name: string}, U extends keyof T>(value:T,key:U):T{
    value[key]
    return value;
}
console.log(copy({name: 'shot',age: 38},'age'));
type K = keyof {name: string; age: number};

class LightDatabase <T extends string | number | boolean>{
    private data: T[] = [];
    add(item: T){
        this.data.push(item);
    }
    remove(item: T){
        this.data.splice(this.data.indexOf(item),1);
    }
    get(){
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('AAAAAAA');
interface TmpDatabase<T> {
     id: number;
     data: T[];
 }
const TmpDatabase: TmpDatabase<number> = {
    id:1,
    data: [32]
}

interface Todo {
    title: string;
    text: string;
}
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    },3000);
})

fetchData.then(data => {
    data.toUpperCase();
})
const vegetables: Array<string> = ['Tomato','Broccoli','Asparagus'];

interface ResponceData<T extends {messages: string} = any> {
    data: T;
    status: number;
}
let tmp: ResponceData;
interface Vegetables {
    tomato: string;
    pumpkin: string;
}
let tmp2: keyof Vegetables;
type MappedTypes = {
    -readonly[P in 'tomato' | 'pumpkin']-?: P
}
type ConditionalTypes = 'tomato' extends string ? string: number | boolean;
type ConditionTypeInfer = {tomato: 'tomato'} extends {tomato: infer R} ? R : boolean;
type DisributiveConditionalTypes<T> = T extends 'tomato' ? number : boolean;
let tmp3: DisributiveConditionalTypes<'tomato' | 'pumpkin'>
let tmp4: NonNullable<string | null>;
