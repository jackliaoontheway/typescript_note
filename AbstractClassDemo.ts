abstract class BaseController {
    // 使用 private 则 默认是类属性
    constructor(private path: string) {

    }

    abstract process(): void;

    getPath(): string {
        return this.path;
    }
}

class LogonController extends BaseController {

    process(): void {
        console.log('process');

    }

    login(): boolean {
        return true;
    }

}

let con = new LogonController('a'); // 这里的 a 直接给 path 属性赋值
console.log(con.getPath());
console.log(con.process());

let con2: BaseController = new LogonController('login');
// con2.login(); error


interface Controlable extends BaseController {


}


function max(x: number, y: number): number {
    return x > y ? x : y;
}

function min(x, y) {
    return x > y ? x : y;
}

let avg = function(x,y) {
    return x > y ? x : y;
}

let count = (x,y) => {
    return x > y ? x : y;
}

// 可选参数必须放在必须参数后面
let convert = (x ? : number, y ? : number) => {
    return x ? x : y;
}

// 有默认值的参数 也是可选参数
let fun = (x :number, y = 10) => {
    return x + y;
}
console.log(fun(1));

// 变长参数 , 必须是数组类型
let fun2 = (x:number , ...reset : number[]) => {
    return reset.length;
}
console.log(fun2(1,2,3,4,5));