console.log("compiler");

let hello: string = "hello";
console.log(hello.toUpperCase());

function echo(message: string) {
    return message
}

let implicitAny;
implicitAny = 'implicitAny';
implicitAny.toUpperCase();

let nullableMessage: string | null = echo('hi');
let onlyNull: null = null;
let onlyUndefined: undefined = undefined;
if(onlyUndefined) {
    onlyUndefined;
}

let nums = 200;

function echoo(num: number) {
    num = 123;
    if(num === 200) {
        console.log("Success");
    }else{
        console.log("Error");
    }
}

