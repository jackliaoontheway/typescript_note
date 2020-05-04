interface Person {
    pName: string;
    pAge: number;
    pMarried: boolean;
    readonly pSalary?: number; // ? 可选属性  // readonly 只读
    habby?: any;
    funy(string, number): void;
    [propsName: string]: any;
}

let person: Person = {
    pName: 'Jack',
    pAge: 22,
    pMarried: false,
    funy: function () {
        console.log('funny');
    }
}

function fun(person: Person) {
    console.log(person);
    person.funy('play foot ball', 1);
}

fun(person);

let array = ['a', 'b', 'c'];
let readonlyArray: ReadonlyArray<string> = array;
let a = true;
let b = 1;
let obj = {};

array = readonlyArray as string[];
console.log(array);




/**
 * 函数接口
 */
interface CompareFunc {
    (first: number, second: number): boolean;
}

let compare: CompareFunc = function (a, b): boolean {
    return a > b;
}

interface Runnable {
    id:number;
    run():void;
}

class Thread implements Runnable {
    id: number; // 必须要重写id
    run(): void {
        console.log('run');
        
    }
}

interface Throwable {

}

interface Exception extends Throwable{
    throwException():string;
}

interface RuntimeException extends Exception,Throwable {

}




