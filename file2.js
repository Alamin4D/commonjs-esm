const { a: x } = require("./file1"); //100
const { a: y } = require("./file3"); //200
// const add = require("./utility/add");

const { f1: add, f2: sub } = require("./utility")
console.log("Additions: ", add(x, y));
console.log("Subtations: ", sub(x, y));

// console.log(x, y);