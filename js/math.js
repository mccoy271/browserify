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