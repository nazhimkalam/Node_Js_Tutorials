// const fs = require("fs");

// // Reading from a file
// fs.readFile("Calculator.js", "utf8", (err, data) => {
//   try {
//     console.log(data);
//   } catch {
//     console.log(err);
//   }
// });

// // Writing into a new file
// fs.writeFile(
//   "./newCalculator.js",
//   "console.log('This is my new file')",
//   (err) => {
//     try {
//       console.log("Successfully created a new file");
//     } catch {
//       console.log(err);
//     }
//   }
// );

// // Appending into a File
// fs.appendFile("./newCalculator.js", "dataForAppend", (err) => {
//   try {
//     console.log("Successfully appended data");
//   } catch {
//     console.log("Error Occurred");
//     console.log(err);
//   }
// });

// Deleting a file
// fs.unlink("./newCalculator.js", (err) => {
//   try {
//     console.log("File Successfully Deleted");
//   } catch {
//     console.log(err);
//   }
// });
