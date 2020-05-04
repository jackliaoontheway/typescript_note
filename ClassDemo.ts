class ChargeRate {
    currency: number;

    constructor(currency: number) {
        this.currency = currency;
    }

    calculate(rate: number = 100): number {
        return this.currency * rate;
    };

}

class FreightChargeRate extends ChargeRate {
    // constructor(currency: number) {
    //     super(currency);
    // }
}

let r = new FreightChargeRate(1);
console.log(r.calculate(10));
console.log(r.calculate());

class Person {
    // 参数加上  public 或者 private protected 则 参数默认为类的属性
    // 如果没有修饰则只是参数变量
    // ,public age: number 如果有 set get 则默认有age属性
    constructor(private name: string) {

    }

    get age():number {
        return this.age;
    }
    set age(age : number) {
        this.age = age;
    }

    getName():string {
        return this.name;
    }

    setName = function(name:string):void {
        this.name = name;
    }
}

let person = new Person('a');
person.setName('jack');
// person.name = '111';
person.age = 22;
console.log(person.age);

console.log(person.getName());
