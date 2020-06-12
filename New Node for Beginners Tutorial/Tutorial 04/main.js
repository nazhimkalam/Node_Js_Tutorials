// Pipe : using pipe we can read the data from a file and write it directly using pipe()
const fs = require("../Tutorial 05/node_modules/fs");
const readStream = fs.createReadStream("./input.txt", "utf8");
const writeStream = fs.createWriteStream("./output.txt");
readStream.pipe(writeStream);

// Pipe Chaining : using Pipe Chaining we can compress and un compress the file

// compressing
const fs = require("../Tutorial 05/node_modules/fs");
const zlib = require("../Tutorial 05/node_modules/zlib");
const gzip = zlib.createGzip();
const readStream = fs.createReadStream("./input.txt", "utf8");
const writeStream = fs.createWriteStream("./output1.txt.gz");
readStream.pipe(gzip).pipe(writeStream);

// un-compressing
const fs = require("../Tutorial 05/node_modules/fs");
const zlib = require("../Tutorial 05/node_modules/zlib");
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream("./output1.txt.gz");
const writeStream = fs.createWriteStream("./uncompressedData.txt", "utf8");
readStream.pipe(gunzip).pipe(writeStream);
