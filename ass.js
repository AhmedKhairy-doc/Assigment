//           1
// const path = require("node:path");
// const fs = require("node:fs");
// const destpath= path.resolve("text.html");
// const readStream= fs.createReadStream(destpath, {encoding:"utf-8"});
// readStream.on('data',(chunk)=>{   
//     console.log(chunk);
   
// })

//         2
// const path = require("node:path");
// const fs = require("node:fs");
// const filepath= path.resolve("./hello.txt");
// const destpath= path.resolve("text.html");
// const readStream= fs.createReadStream(destpath,{encoding:"utf-8"});
// const writeStream= fs.createWriteStream(filepath);
// readStream.on('data',(chunk)=>{   
//     console.log(chunk);
//     writeStream.write(chunk);

// })

//        3
// const path = require("node:path");
// const fs = require("node:fs");
// const {createGzip} = require("node:zlib");
// const filepath= path.resolve("./hello.txt.gz");
// const destpath= path.resolve("text.html");

// const zip = createGzip();
// const readStream= fs.createReadStream(destpath,{encoding:"utf-8"});
// const writeStream= fs.createWriteStream(filepath);
// readStream.pipe(zip).pipe(writeStream)
