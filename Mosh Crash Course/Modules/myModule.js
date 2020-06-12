// This is a module which will be exported for other modules to be used
// We export the functions or variables using the module.export method available
// module.exports is a variable which is declared to an empty object, and this module.exports can be used anywhere
// So we are going to store it in this object and use it out side

function welcome() {
  console.log("Hello World");
}
module.exports.message = welcome(); // we add a key called message with a value welcome function for the export object {}
