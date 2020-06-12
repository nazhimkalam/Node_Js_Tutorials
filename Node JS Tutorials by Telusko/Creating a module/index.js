// I have to import the Calculator Module using require() method
let Calculator = require("./Calculator.js");

// We are going to create a Module of Our own and use that modules functions
console.log("Hi Nazhim we are going to use a Module created by YOU!!!");


// Now I can use the methods available in the Calculator Module
Calculator.addition(2,5);
Calculator.product(2,5);
Calculator.subtraction(2,5);
Calculator.division(2,5);
