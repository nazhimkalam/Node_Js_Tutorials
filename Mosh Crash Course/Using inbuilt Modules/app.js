// Using the 'path' module we can get details about the file, dir etc.. with the help of parse()
const path = require("path");
console.log(path.parse(__filename));
console.log(path.parse(__dirname));

// Using the OS (Operating System) Module
const os = require("os");
console.log(`${os.freemem()} +  this is the free memory`);
console.log(os.totalmem() + " this is the total memory");
console.log(os.version() + " version of the OS");
console.log(os.userInfo() + " user info of the OS");
console.log(os.uptime() + " uptime of the OS");

// Reading a directory (Using either Sync or Async)
// -- We mostly prefer to use Async ( it uses callback function ) and faster than Sync
const fs = require("fs");

// --using Sync
console.log(fs.readdirSync("./"));

// --using Async
fs.readdir("./", (err, file) => {
  file ? console.log(file) : console.log(err);
});
