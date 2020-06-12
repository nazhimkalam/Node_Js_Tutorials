const fs = require("../Tutorial 05/node_modules/fs");
// ================ Write Stream and Read Stream Data ================
const readStream = fs.createReadStream("./random.txt", "utf8"); // reading from a file
readStream.on("data", (chunk) => {
  console.log(chunk);
});

const writeStream = fs.createWriteStream("./random2.txt"); // creating and writing into  the file
writeStream.write("this is how you write into a file");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

// WHY do we use readStream instead of readFile ???????
// * using read File who can only read a limit number of data which is of small size
// * using readStream we can read large data which are of 3gb of size etc...