// let data = require("./myModule");
// console.log(data.displayName("Nazhim"));
// console.log("------------------------------");
// let std1 = new data.Student("Nazhim", 18);
// console.log(std1.getName());
// console.log(std1.getAge());

//-------------ReadLine------Module--------------
// const readLine = require("readline");
// const r1 = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let num1 = Math.floor(Math.random() * 10 + 1);
// let num2 = Math.floor(Math.random() * 10 + 1);
// let answer = num1 + num2;

// r1.question(`What is ${num1} + ${num2} ?\n`, (userInput) => {
//   if (userInput.trim() == answer) {
//     r1.close();
//   } else {
//     r1.setPrompt("Incorrect Answer\n");
//     r1.prompt();
//     r1.on("line", (userInput) => {
//       // this event is trigger when there is a change in any line
//       if (userInput.trim() == answer) {
//         r1.close();
//       } else {
//         r1.setPrompt("Incorrect answer\n");
//         r1.prompt();
//       }
//     });
//   }
// });

// r1.on("close", () => {
//   console.log("Correct!!!!");
// });

// -------------------------------------- File Handling -----------------------------------------
const fs = require("fs");

// writing into a File
fs.writeFile(
  "example.txt",
  "this is an example of writing into a file",
  (error) => {
    error ? console.log(error) : console.log("Successfully created file");
  }
);

// Reading from a file
fs.readFile("./example.txt", "utf8", (err, file) => {
  err ? console.log(err) : console.log(file);
});

// Renaming a File
fs.rename("./example.txt", "newFile.js", (err) => {
  err ? console.log(err) : console.log("Successfully file Renamed");
});

// Appending data into a file
fs.appendFile("./newFile", "some data appended", (err) =>
  err ? console.log(err) : console.log("data successfully appended")
);

// Deleting a file
fs.unlink("newFile.js", (err) =>
  (err) ? console.log(err) : console.log("Successfully deleted file")
);
