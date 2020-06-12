//--------------------------------- File System Part 02 -------------------------------------
const fs = require("fs");

// CREATING A DIRECTORY OR A FOLDER
// fs.mkdir("Folder", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder Successfully Created...");
//     fs.rmdir("Folder", (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Folder Successfully Deleted...");
//       }
//     });
//   }
// });

// CREATING FILES INSIDE A FOLDER WITH DATA IN THE FILE
// fs.mkdir("folder", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder Created");

//     fs.writeFile("./folder/file.txt", "this is my new file", "utf8", (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("File Created");
//       }
//     });
//   }
// });

// NOTE WE ONLY CAN DELETE A FOLDER DIRECTLY IF IT'S EMPTY
// SO TO DELETE A FOLDER WITH FILES IN IT WE FIRST HAVE TO DELETE THE FILES THEN THE FOLDER

// fs.unlink("./folder/file.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file deleted");
//   }
// });

// fs.rmdir("./folder", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder deleted successfully");
//   }
// });

// IF YOU HAVE MANY FILES IN A FOLDER, HOW CAN YOU DELETE THEM WITH THE FOLDER INCLUSIVE (for this is will create a folder with 3 files in it)
// fs.readdir("./folder", "utf8", (err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(files);
//     for (let file of files) {
//       fs.unlink("./folder/" + file, (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(file + " deleted");
//         }
//       });
//     }
//   }
// });

// fs.rmdir("folder", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder Deleted");
//   }
// });
