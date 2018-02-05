(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function add(a, b) {
    return a + b;
}

module.exports = add;
},{}],2:[function(require,module,exports){
"use strict";

console.log("main js is in the house");

let MathModule = require("./math");
console.log("MathModule", MathModule);
console.log("adding", MathModule.adding(3,5));
},{"./math":3}],3:[function(require,module,exports){
"use strict";

let add = require("./add");
let multiply = require("./multiply");
let subtract = require("./subtract");

let Calculator = {
    add,
    subtract,
    multiply
};

module.exports = Calculator;
},{"./add":1,"./multiply":4,"./subtract":5}],4:[function(require,module,exports){
"use strict";

function multiply(a, b){
    return a * b;
}

module.exports = multiply;
},{}],5:[function(require,module,exports){
"use strict";

function subtract(a, b){
    return a - b;
}

module.exports = subtract;
},{}]},{},[2]);
