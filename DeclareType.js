/**
 * var let const
 *
 * let 具有块级作用域，没有提前，同一作用域不可重复定义
 */
var _a;
var array = [1, 2];
var a = array[0], b = array[1];
console.log(a, b);
_a = [b, a], a = _a[0], b = _a[1];
console.log(a, b);
var _b = [1, 2, 3, 4, 5], f = _b[0], reset = _b.slice(1);
console.log(f, reset);
