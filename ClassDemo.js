var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ChargeRate = /** @class */ (function () {
    function ChargeRate(currency) {
        this.currency = currency;
    }
    ChargeRate.prototype.calculate = function (rate) {
        if (rate === void 0) { rate = 100; }
        return this.currency * rate;
    };
    ;
    return ChargeRate;
}());
var FreightChargeRate = /** @class */ (function (_super) {
    __extends(FreightChargeRate, _super);
    function FreightChargeRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FreightChargeRate;
}(ChargeRate));
var r = new FreightChargeRate(1);
console.log(r.calculate(10));
console.log(r.calculate());
var Person = /** @class */ (function () {
    // 参数加上  public 或者 private protected 则 参数默认为类的属性
    // 如果没有修饰则只是参数变量
    // ,public age: number 如果有 set get 则默认有age属性
    function Person(name) {
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            this.age = age;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person('a');
// person.setName('jack');
// person.name = '111';
person.age = 22;
console.log(person.age);
// console.log(person.getName());
