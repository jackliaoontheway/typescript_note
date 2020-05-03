enum Gender {
    Male = 1, Female
}

let gender: Gender = Gender.Female;
console.log(gender);

let genderName: string = Gender[1];
console.log(genderName);

let str: any;
str = 123;
str = true;

let array: any[] = [123, true, 'hello'];

/*
    void  只用于方法返回值和 null undefined 赋值
*/
function fun(): void {

}
let v: void = null;
let vo: void = undefined;
console.log(v, vo);

/*
    null undefined
*/
let nu: null = null;
let un: undefined = undefined;
let nu1: null = undefined;
let nu2: undefined = null;

/*
    never 
    用于没有返回值的函数 并且必须要有抛出异常
    用于 死循环 没有终点
*/
function error(): never {
    throw new Error();
}

function neverLoop(): never {
    while (true) {

    }
}

/*
    object
*/
let obj: object = { name: 'jack', age: 20 };


/**
 * 类型断言
 * <type>
 * (objA as string)
 */

let objA: any = 'string';
let s:string = (<string>objA).substr(0,2);
let st:string = objA.substr(0,1);

let ss:string = (objA as string).substr(0,2);
