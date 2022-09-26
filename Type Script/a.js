var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 1;
var b = "abc";
var c = true;
var d = null;
var e;
var f1 = [1, 2, 3, 4];
var f2 = [1, 2, 3, 4];
var g1 = ["gfdghd", "gfdfdg", "fdffdfg", "ddaa"];
var g2 = ["gfdghd", b, "fdffdfg", "ddaa"];
var g3 = ["sdff", 1, 4, 54, "eeeeheg"];
var g4 = ["sdff", 1, 4, 54, "eeeeheg", true];
//{} // what is the key
var h1 = {
    loading: true,
    error: true,
    data: []
};
// Record // datatype of values is same
var h2 = {
    loasing: true,
    error: true
};
// arr and obj
var i1 = [
    {}
];
// arr and obj
var i2 = [
    { name: "Abhi", age: 20, place: "Kasganj" }
];
//function 
var add1 = function (a, b) {
    return a + b;
};
add1(1, 3);
//No need to return function 
var add2 = function (a, b) {
    console.log(a + b);
};
add2(1, 3);
//matrix
var j = [
    [1, 2],
    [1, 4],
    [2, 7],
];
var j3 = [
    ["a", 1],
    ["b", 2, 4],
    ["b", 2]
];
// Small Capital str
var country1 = [
    "India",
    "China",
    // "ind",
    // "china"
];
var country2 = [
    "India",
    "China",
    // "ind",
    // "china"
];
// User data type
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var Users = [
    { name: "A", age: 15, email: "a@com", gender: Gender.Male },
    { name: "B", age: 43, email: "b@com" },
];
// ---------- classes ---------
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getTypes = function () {
        return 4;
    };
    Car.prototype.getEngine = function () {
        return "V8";
    };
    Car.prototype.getEngineType = function () {
        return "Petrol";
    };
    return Car;
}());
var Indica = /** @class */ (function (_super) {
    __extends(Indica, _super);
    function Indica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Indica.prototype.getEngineType = function () {
        return "electrical";
    };
    return Indica;
}(Car));
var a1 = new Indica();
a1.getTypes(); // 4
a1.getEngineType(); //electrical
