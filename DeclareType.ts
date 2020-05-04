/**
 * var let const
 * 
 * let 具有块级作用域，没有提前，同一作用域不可重复定义
 */

let array : number [] = [1,2];
let [a,b] = array;
console.log(a,b);
[a,b] = [b,a];
console.log(a,b);

let [f,...reset]  : number [] = [1,2,3,4,5];
console.log(f,reset);
