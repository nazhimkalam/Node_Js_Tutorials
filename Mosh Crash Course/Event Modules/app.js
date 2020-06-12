// In node we have a module called 'http' to build a web server by listening on a given port
// Depending on the request given by the Client / User we can send the response

// This is the basic method of rasing an Event and Listening to it using the Listener Class
const EventEmitter = require("events");
const emitter = new EventEmitter(); // emitter is an OBJECT of the EventEmitter class and we use this OBJECT through out the program

// Register a Listener
emitter.on("loading...", () => {
  console.log("Listener called");
}); //on () also refers to Handling an event like an Event handler 

// This is how to raise the event , without this the above listener wont work
emitter.emit("loading...");

// NOTE: The lister should be always created above the raise event


