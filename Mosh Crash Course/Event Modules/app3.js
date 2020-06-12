// How to make use of 'Class' to handle events without using 'emitter'
const test = require("./testing");

const obj = new test.TestClass();

obj.on("tester", (arguments) => {
  console.log("Listener called");
  console.log(arguments);
  console.log(`${arguments.name}`);
});

obj.display("hey");
