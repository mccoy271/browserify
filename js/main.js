"use strict";

console.log("main js is in the house");

let MathModule = require("./math");
console.log("MathModule", MathModule);
console.log("adding", MathModule.adding(3,5));