const EventEmitter = require("events");
class Test extends EventEmitter {
  display(text) {
    console.log(text);

    this.emit("tester", {
      name: "Nazhim",
      id: 2019281,
      url: "https://google.com/nazhim/bio",
    });
  }
}
exports.TestClass = Test;
