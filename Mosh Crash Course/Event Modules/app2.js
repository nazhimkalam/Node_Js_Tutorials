// HOW TO SEND DATA AS ARGUMENTS TO THE EVENT LISTENER  ?
// We can send all the necessary arguments as a single object so that it will look simpler!!!

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("newLoading...", (arguments) => {
  console.log("Listener called");
  console.log(arguments);
  console.log(`${arguments.name}`)
});

emitter.emit("newLoading...", {
  name: "Nazhim",
  id: 2019281,
  url: "https://google.com/nazhim/bio",
});
