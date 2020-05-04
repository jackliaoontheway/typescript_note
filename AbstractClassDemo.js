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
var BaseController = /** @class */ (function () {
    // 使用 private 则 默认是类属性
    function BaseController(path) {
        this.path = path;
    }
    BaseController.prototype.getPath = function () {
        return this.path;
    };
    return BaseController;
}());
var LogonController = /** @class */ (function (_super) {
    __extends(LogonController, _super);
    function LogonController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogonController.prototype.process = function () {
        console.log('process');
    };
    LogonController.prototype.login = function () {
        return true;
    };
    return LogonController;
}(BaseController));
var con = new LogonController('a'); // 这里的 a 直接给 path 属性赋值
console.log(con.getPath());
console.log(con.process());
var con2 = new LogonController('login');
function max(x, y) {
    return x > y ? x : y;
}
function min(x, y) {
    return x > y ? x : y;
}
var avg = function (x, y) {
    return x > y ? x : y;
};
var count = function (x, y) {
    return x > y ? x : y;
};
// 可选参数必须放在必须参数后面
var convert = function (x, y) {
    return x ? x : y;
};
// 有默认值的参数 也是可选参数
var fun = function (x, y) {
    if (y === void 0) { y = 10; }
    return x + y;
};
console.log(fun(1));
var fun2 = function (x) {
    var reset = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        reset[_i - 1] = arguments[_i];
    }
    return reset.length;
};
console.log(fun2(1, 2, 3, 4, 5));
