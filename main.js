const path= require("node:path");
const os=require("node:os");
console.log( os.arch(),os.platform()); // or
console.log(process.arch, process.platform);
