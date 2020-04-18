function Logging(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

console.dir(Logging);
function Component(templates: string, selector: string) {
    return function <T extends { new(...args: any[]): { name: string }}>(constructor: T ) {
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if(mountedElement){
            mountedElement.innerHTML = templates;
            mountedElement.querySelector('h1')!.textContent = instance.name;
        }
        return class extends constructor {  
            constructor(...args: any[]) {
                super();
            }
        }
    }
}

function PropertyLogging(target: any, propertyKey: string) {
    console.log('propertyLogging');
    console.log(target);
    console.log(propertyKey);
}

function MethodLogging(target: any, propertyKey: string, descriptor: PropertyDecorator) {
    console.log('MethodLogging');
    console.log(target);
    console.log(descriptor);
    console.log(propertyKey);
}

function AccessorLogging(target: any, propertyKey: string, descriptor: PropertyDecorator) {
    console.log('AccessorLogging');
    console.log(target);
    console.log(descriptor);
    console.log(propertyKey);
}

function ParameterLogging(target: any, propertyKey: string, descriptor: PropertyDecorator) {
    console.log('ParameterLogging');
    console.log(target);
    console.log(descriptor);
    console.log(propertyKey);
}

function enumerable(isEnumerable: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDecorator){
        return {
            enumerable: isEnumerable
        }
    }
}

@Component('<h1>{{name}}</h1>','#app')
class User {
    @PropertyLogging
    name = 'Shot';
    constructor(private _age: number) {
        console.log("User was created!");
    }
    greeting() {
        console.log('Hi');
    }
}

const users = new User(21);



